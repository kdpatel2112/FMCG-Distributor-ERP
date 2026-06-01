const express = require('express');
const jwt = require('jsonwebtoken');
const { User, Shop, Product, Order, Doc, Wallet, ActivityLog } = require('./models');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'GODREJ_SUPER_SECRET_ERP_KEY';

// Middleware for JWT validation
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Authentication credentials token missing!' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ error: 'Session keys invalid or expired!' });
  }
};

// --- 🔐 AUTHENTICATION ENDPOINTS ---
router.post('/auth/register', async (req, res) => {
  try {
    const { email, password, name, role, mobile } = req.body;
    const user = new User({ email, password, name, role, mobile });
    await user.save();
    res.status(201).json({ message: 'Corporate profile gateway registered successfully!' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/auth/login', async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = await User.findOne({ email, role });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid email, role, or access key credentials!' });
    }

    const token = jwt.sign({ id: user._id, role: user.role, name: user.name }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { name: user.name, role: user.role, email: user.email, shopId: user.shopId } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- 📦 PRODUCTS CRUD ---
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/products', authenticate, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Access denied: Super Admin credentials needed.' });
  try {
    const product = new Product(req.body);
    await product.save();
    
    // Broadcast Stock trigger
    req.app.get('io').emit('stock_update', { productId: product._id, name: product.name, stock: product.stock });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/products/:id', authenticate, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Access denied: Super Admin credentials needed.' });
  try {
    const product = await Product.findByIdAndUpdate(req.id || req.params.id, req.body, { new: true });
    req.app.get('io').emit('stock_update', { productId: product._id, name: product.name, stock: product.stock });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/products/:id', authenticate, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Access denied: Super Admin credentials needed.' });
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Catalog product deleted successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- 🏪 SHOP REGISTRATION ---
router.get('/shops', authenticate, async (req, res) => {
  try {
    const shops = await Shop.find();
    res.json(shops);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/shops', async (req, res) => {
  try {
    const shop = new Shop(req.body);
    await shop.save();
    
    // Initialise Wallet
    const wallet = new Wallet({ shopId: shop._id, prepaid: 0, creditLimit: 50000, outstanding: 0 });
    await wallet.save();

    req.app.get('io').emit('new_shop_alert', { shopName: shop.name });
    res.status(201).json(shop);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.put('/shops/:id/status', authenticate, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Super Admin privileges required.' });
  try {
    const shop = await Shop.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.json(shop);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// --- 🧾 ORDERS WORKFLOWS ---
router.get('/orders', authenticate, async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/orders', authenticate, async (req, res) => {
  try {
    const { items, shopId, zone } = req.body;
    const shop = await Shop.findById(shopId);
    if (!shop) return res.status(404).json({ error: 'Shop profile missing!' });

    // Verify Stock & Calculate values
    let taxableTotal = 0;
    let cgst = 0;
    let sgst = 0;

    for (let item of items) {
      const prod = await Product.findById(item.productId);
      if (!prod || prod.stock < item.qty) {
        return res.status(400).json({ error: `Insufficient warehouse stock for item: ${item.productName}` });
      }
      // Deduct Stock
      prod.stock = Math.max(0, prod.stock - item.qty);
      await prod.save();

      const lineTotal = item.price * item.qty;
      taxableTotal += lineTotal;
      cgst += lineTotal * (item.gst / 200);
      sgst += lineTotal * (item.gst / 200);
    }

    const discount = taxableTotal > 500 ? taxableTotal * 0.10 : 0;
    const netTaxable = taxableTotal - discount;
    const finalGST = netTaxable * 0.18;
    const grandTotal = netTaxable + finalGST;

    const invoiceNum = `INV-26-0${Date.now().toString().slice(-4)}`;
    const newOrder = new Order({
      id: `ORD-2026-${Date.now().toString().slice(-4)}`,
      date: new Date().toISOString().split('T')[0],
      shopId,
      shopName: shop.name,
      gstin: shop.gstin,
      zone,
      items,
      taxableTotal: netTaxable,
      cgst: finalGST / 2,
      sgst: finalGST / 2,
      discount,
      grandTotal,
      invoiceNum
    });

    await newOrder.save();

    // Broadcast new order socket event
    req.app.get('io').emit('new_order_alert', { orderId: newOrder.id, shopName: newOrder.shopName, amount: newOrder.grandTotal });
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- 💳 WALLET BALANCE & REPAYMENTS ---
router.get('/wallet/:shopId', authenticate, async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ shopId: req.params.shopId });
    res.json(wallet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/wallet/:shopId/recharge', authenticate, async (req, res) => {
  try {
    const { amount, goal } = req.body;
    const wallet = await Wallet.findOne({ shopId: req.params.shopId });
    if (!wallet) return res.status(404).json({ error: 'Prepaid Wallet portfolio missing!' });

    if (goal === 'prepaid') {
      wallet.prepaid += amount;
    } else {
      wallet.outstanding = Math.max(0, wallet.outstanding - amount);
    }

    await wallet.save();
    res.json(wallet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
