require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const taskRoutes = require('./routes/task.routes');

// ✅ Connect to MongoDB
connectToDb();

const app = express();

// ✅ CORS configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
  })
);

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Routes
app.use('/api/auth', userRoutes);
app.use('/api/tasks', taskRoutes);

// ✅ Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ ok: true, message: 'Server is running 🚀' });
});

// ✅ Root route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Task Management API' });
});

module.exports = app;
