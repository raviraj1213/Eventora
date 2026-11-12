
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
const bookingRoutes = require('./routes/bookings');

const app = express();
console.log("========== ROUTE DEBUG ==========");
console.log("authRoutes:", typeof authRoutes);
console.log("eventRoutes:", typeof eventRoutes);
console.log("bookingRoutes:", typeof bookingRoutes);
console.log("=================================");

// Middleware
app.use(cors());
app.use(express.json());
//health check
app.get("/", (req, res) => {
    res.send("Eventora Backend is Live!");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Eventora API is running"
    });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/bookings', bookingRoutes);

// Database Connection
mongoose.connect(process.env.MONGODB_URI )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));