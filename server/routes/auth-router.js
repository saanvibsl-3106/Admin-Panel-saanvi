const express = require('express');
const router = express.Router();
const authControllers = require("../controllers/auth-controller"); // Correctly import the controllers

// Define routes
router.get('/', authControllers.home); // Use home controller for GET requests to '/api/auth/'
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.status(200).json({ message: 'Login successful' });
});

router.post('/register', authControllers.register);

router.post('/reset-password', (req, res) => {
  const { email } = req.body;
  res.status(200).json({ message: 'Password reset email sent' });
});

router.post('/login', authControllers.login);

module.exports = router;
