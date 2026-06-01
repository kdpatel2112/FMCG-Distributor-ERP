# 🚀 Enterprise Godrej FMCG Distributor ERP Management Suite

An enterprise-grade, glassmorphic **B2B Distributor Management & ERP System** modeled after commercial supply-chain portals utilized by FMCG conglomerates (like Godrej Consumer Products, HUL, ITC, and Nestlé). 

This platform seamlessly integrates a high-fidelity **Single-Page Application (SPA) Client Interface** and a **production-ready Node.js + Express REST API Server** connected to MongoDB with real-time Socket.io channels.

---

## ⚡ Platform Architecture & High-Fidelity Modules

### 1. 📂 510-Product High-Fidelity FMCG Database
- Preloaded with **510 real-world Godrej Consumer Products** spanning major corporate portfolios:
  - *Goodknight & HIT* (Household Insecticides: vaporizers, sprays, chalks, coils)
  - *Cinthol & Godrej No. 1* (Personal Care: bathing soaps, talcs, deodorants)
  - *Ezee, Genteel, & Protekt* (Hygiene & Detergents: liquid wash, sanitizers, handwash)
  - *Nupur & Rich Crème* (Hair Color & Care)
- Each item is mapped dynamically to real-world:
  - **GS1-compliant EAN-13 Barcodes** (prefixed with `8901157` for Godrej India).
  - **Official HSN Codes & GST tax slabs** (5%, 12%, 18%, 28%) for statutory compliance.
  - **Box Case Packing Ratios** (`boxQty`) for seamless case-quantity and piece-quantity shopping cart calculations.

### 2. 💳 Real-Life Payment Gateway (Sandbox Mode)
- **Official Razorpay Checkout Integration**: Incorporates the standard `Razorpay` Web Checkout JS SDK. Retailers can initiate secure popup checkouts mapped to sandbox test authorization screens.
- **Dynamic Scannable UPI QR Codes**: Replaced stubs with a secure QR API server that dynamically compiles India-standard UPI URIs:
  `upi://pay?pa={UPI_ID}&pn=Godrej%20Consumer%20Products&am={AMOUNT}&cu=INR&tn=ERP-Wallet-Topup`
  Scanning the resulting QR code with real payment applications (GPay, PhonePe, Paytm, BHIM) pre-fills the payee details and the exact wallet recharge total!
- **Payment Settings persistent Console**: A collapsible, gear-triggered dashboard panel allowing owners to configure their Merchant UPI VPA and Razorpay Test Key, persisted locally inside `localStorage` under the `godrej_erp_payment_settings` namespace.

### 3. 🔊 Paytm-Style Soundbox Voice Announcement
- Utilizes the browser's native **Web Speech API (`window.speechSynthesis`)** to act as a B2B transaction soundbox.
- Upon successful payment authorizations or simulated QR sandbox bypasses, the system speaks out loud at a professional `0.95x` rate:
  - **English voice channel**: `"Received Rupees [amount] successfully on Godrej Pay!"`
  - **Hindi voice channel fallback**: `"गोदरेज पे पर ${amount} रुपये सफलतापूर्वक प्राप्त हुए!"` (Triggered automatically when the platform language selector is switched to Hindi).

### 4. 📱 Mobile App Companion Simulator
- Renders an interactive, glassmorphic smartphone cased frame in desktop views for hybrid supply-chain operations.
- **Companion Tabs**:
  - **Home**: View prepaid balance, outstanding credit terms, and notification triggers.
  - **Scanner**: Decodes GTIN barcodes instantly to look up and insert items into the shopping cart.
  - **Updates**: Visual pipeline timeline (Pending -> Packed -> Out for Delivery -> Delivered).
  - **Alerts**: Real-time push notification log.

### 5. 🚚 GPS Delivery Proof & Logistics
- **GPS Map Tracker**: Custom canvas tracing routes from regional warehouses to dealer stores (Depots, toll gates, inner rings) with active speed metrics and real-time ETA countdowns.
- **Signature pad**: Interactive touch-drag HTML5 canvas signature pad for dealer delivery verification.
- **Challan photo proof**: Captures and archives physical warehouse loading and delivery receipt proof logs.

### 6. 🤖 AI Predictive Analytics
- **Predictive Revenue**: Integrated linear regression predictive models that compute and chart next-month sales projections using Chart.js graphs.
- **Invoice OCR Scanner**: Upload supplier bills/invoices to a dotted drag-zone. The OCR parses quantities and HSN splits, importing them into the cart in one click.
- **CRM Behavior Analytics**: Analyzes dealer buying frequency and lists Platinum/Gold stockist churn probability percentages with automated risk alerts.

### 7. 🧾 GST Compliance & Document Vault
- **Tax Splits**: Live CGST + SGST tax pool divisions (9% + 9% splits for 18% HSNs).
- **Thermal print**: Generates responsive tax invoice bills complete with gov portal verification QR codes, GS1 barcodes, E-Way Bill numbers, and authorized signature lines.
- **Data Portability**: Standard export hooks for GST spreadsheets (Excel/CSV) and PDF catalogs.

---

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3 (Premium Dark-Glassmorphism theme with Framer-style micro-animations), Vanilla JavaScript, Lucide Icons, Chart.js.
- **Backend Service**: Node.js, Express (REST API layers), Socket.io (Real-time notifications), Helmet Security Headers, Cors, Express rate limiters.
- **Database**: MongoDB (Mongoose models for Users, Shops, Products, Orders, Wallets, Documents, and Activity Logs).

---

## 🚀 Setup & Launch Instructions

### 1. Run the Express Core Server:
```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Start the server (Dev mode requires nodemon)
npm start
```

### 2. Launch the Web Console:
- Open your browser and navigate to: **`http://localhost:5000`**
- All modals are fully responsive, supporting parent swipe/drag scrolling gestures on tablets and mobile screens without vertical cutoff bugs!
