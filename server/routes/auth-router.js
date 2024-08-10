const express = require('express');
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const otpController = require("../controllers/otp-conroller");
const { validateRegister, validateLogin } = require('../middlewares/auth-middleware');
const userMiddleware = require("../middlewares/user-middleware");

router.get('/', authControllers.home);
router.post('/login', validateLogin, authControllers.login);
router.post('/register', validateRegister, authControllers.register);
router.get('/user', userMiddleware, authControllers.user);
router.post('/reset-password', (req, res) => {
  const { email } = req.body;
  res.status(200).json({ message: 'Password reset email sent' });
});

// New OTP routes
router.post('/generate-otp', otpController.generateOtp);
router.post('/verify-otp', otpController.verifyOtp);

module.exports = router;