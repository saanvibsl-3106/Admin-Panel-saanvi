// server.js
const express = require('express');
const authRouter = require('../routes/auth-router'); // Corrected path
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
