const express = require('express');
const router = express.Router();
const authControllers = require("../controllers/auth-controller"); // Correctly import the controllers

// Define routes
router.get('/', authControllers.home);
router.post('/login', authControllers.login);
router.post('/register', authControllers.register);
router.post('/reset-password', (req, res) => {
  const { email } = req.body;
  res.status(200).json({ message: 'Password reset email sent' });
});

module.exports = router;
