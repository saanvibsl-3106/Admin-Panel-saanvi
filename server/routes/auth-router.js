const express = require('express');

const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const { validateRegister, validateLogin } = require('../middlewares/auth-middleware'); // Adjust path as needed
const userMiddleware = require("../middlewares/user-middleware");

// Define routes with middleware
router.get('/', authControllers.home);

router.post('/login', validateLogin, authControllers.login);
router.post('/register', validateRegister, authControllers.register);

router.get('/user', userMiddleware, authControllers.user);
router.post('/reset-password', (req, res) => {
  const { email } = req.body;
  res.status(200).json({ message: 'Password reset email sent' });
});

module.exports = router;
