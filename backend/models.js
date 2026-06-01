const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// --- 👤 USER SCHEMA & ROLES ---
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ['admin', 'shop', 'sales', 'delivery'], default: 'shop' },
  mobile: { type: String },
  shopId: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop', default: null }
}, { timestamps: true });

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.methods.comparePassword = async function(cand) {
  return await bcrypt.compare(cand, this.password);
};

// --- 🏪 SHOP SCHEMA ---
const ShopSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: String, required: true },
  mobile: { type: String, required: true, unique: true },
  altMobile: { type: String },
  email: { type: String },
  gstin: { type: String, required: true, unique: true },
  pan: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  type: { type: String, enum: ['Retailer', 'Wholesaler'], default: 'Retailer' },
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
  loyaltyPoints: { type: Number, default: 0 },
  photo: { type: String, default: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=300&q=80' }
}, { timestamps: true });

// --- 📦 PRODUCT SCHEMA ---
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String },
  desc: { type: String },
  hsn: { type: String, required: true },
  gst: { type: Number, default: 18 },
  mrp: { type: Number, required: true },
  distPrice: { type: Number, required: true },
  wholesalePrice: { type: Number, required: true },
  retailPrice: { type: Number, required: true },
  unitType: { type: String, enum: ['Box', 'Piece', 'Pack'], default: 'Box' },
  boxQty: { type: Number, default: 24 },
  weight: { type: String },
  barcode: { type: String, required: true, unique: true },
  sku: { type: String, required: true, unique: true },
  stock: { type: Number, required: true, default: 0 },
  minStock: { type: Number, required: true, default: 5 },
  image: { type: String, default: 'https://images.unsplash.com/photo-1607006342411-92fc4a8f4c2c?w=400&q=80' }
}, { timestamps: true });

// --- 🧾 ORDER SCHEMA ---
const OrderItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, required: true },
  gst: { type: Number, required: true },
  unitType: { type: String, required: true }
});

const OrderSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  date: { type: String, required: true },
  shopId: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop', required: true },
  shopName: { type: String, required: true },
  gstin: { type: String, required: true },
  zone: { type: String, required: true },
  items: [OrderItemSchema],
  taxableTotal: { type: Number, required: true },
  cgst: { type: Number, required: true },
  sgst: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  grandTotal: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'Approved', 'Packed', 'Out for Delivery', 'Delivered', 'Cancelled'], default: 'Pending' },
  invoiceNum: { type: String, required: true, unique: true }
}, { timestamps: true });

// --- 📁 DOCUMENT VAULT SCHEMA ---
const DocSchema = new mongoose.Schema({
  category: { type: String, required: true },
  shopId: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop', required: true },
  shopName: { type: String, required: true },
  date: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
  filename: { type: String, required: true }
}, { timestamps: true });

// --- 💳 WALLET SCHEMA ---
const WalletSchema = new mongoose.Schema({
  shopId: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop', required: true, unique: true },
  prepaid: { type: Number, default: 0 },
  creditLimit: { type: Number, default: 50000 },
  outstanding: { type: Number, default: 0 }
}, { timestamps: true });

// --- 📑 ACTIVITY LOGS SCHEMA ---
const ActivityLogSchema = new mongoose.Schema({
  role: { type: String, required: true },
  shop: { type: String, required: true },
  details: { type: String, required: true }
}, { timestamps: true });

module.exports = {
  User: mongoose.model('User', UserSchema),
  Shop: mongoose.model('Shop', ShopSchema),
  Product: mongoose.model('Product', ProductSchema),
  Order: mongoose.model('Order', OrderSchema),
  Doc: mongoose.model('Doc', DocSchema),
  Wallet: mongoose.model('Wallet', WalletSchema),
  ActivityLog: mongoose.model('ActivityLog', ActivityLogSchema)
};
