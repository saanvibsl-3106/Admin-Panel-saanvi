require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const authRouter = require('./routes/auth-router'); // Ensure this path is correct
const dataRouter = require('./routes/experince-router');
const adminRouter = require('./routes/admin-router');
const { connectDb } = require('./utils/db'); // Import the connectDb function
const errorHandler = require('./middlewares/error-middleware');

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your React app's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Routes
app.use('/api/auth', authRouter);
app.use('/api/data', dataRouter);
app.use('/api/admin', adminRouter);

// Error handling middleware should be added after route definitions
app.use(errorHandler);

// Connect to the database and start the server
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Failed to connect to the database:', err);
});
