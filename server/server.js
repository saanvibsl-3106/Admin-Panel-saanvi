require("dotenv").config();
const express = require('express');
const app = express();
const port = 3000;

const authRouter = require('./routes/auth-router'); // Ensure this path is correct
const contactRouter = require('./routes/contact-route');
const { connectDb } = require('./utils/db'); // Import the connectDb function
const errorHandler = require("./middlewares/error-middleware");

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);

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
