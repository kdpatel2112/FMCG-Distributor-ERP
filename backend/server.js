const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const erpRouter = require('./routes');

const app = express();
const server = http.createServer(app);

// Initialize Socket.io
const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

app.set('io', io);

const path = require('path');

// Security Middlewares
app.use(helmet({
  contentSecurityPolicy: false
}));
app.use(cors());
app.use(express.json());

// Serve static frontend files from the app folder
app.use(express.static(path.join(__dirname, '../app')));

// API Rate Limiting to prevent distributor system DDoS
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// API Route Mount
app.use('/api', erpRouter);

// Handle root route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../app/index.html'));
});

// Database connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/godrej-fmcg-erp';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('⚡ MongoDB Atlas / Local cluster connected successfully!');
}).catch(err => {
  console.error('❌ Database connection error:', err.message);
});

// Socket.io connection channel
io.on('connection', (socket) => {
  console.log('🔌 New distributor terminal linked:', socket.id);
  
  socket.on('disconnect', () => {
    console.log('🔌 Terminal unlinked:', socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Godrej FMCG ERP Core Service active on port ${PORT}!`);
});
