require("dotenv").config();
const express = require('express');
const authRouter = require('./routes/auth-router'); // Ensure this path is correct
const { connectDb } = require('./utils/db'); // Import the connectDb function
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);

// Connect to the database and start the server
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Failed to connect to the database:', err);
});
