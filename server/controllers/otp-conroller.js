const OtpModel = require('../models/otp-model');
const sendOtpEmail = require('../utils/sendOtpEmail');

const otpController = {
  generateOtp: async (req, res) => {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    try {
      // Store the OTP in the database
      await OtpModel.create({ email, otp });

      // Send OTP via email
      await sendOtpEmail(email, otp);
      res.status(200).json({ message: 'OTP sent successfully' });
    } catch (error) {
      console.error('Error generating or sending OTP:', error);
      res.status(500).json({ message: 'Failed to generate or send OTP' });
    }
  },

  verifyOtp: async (req, res) => {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: 'Email and OTP are required' });
    }

    try {
      const otpRecord = await OtpModel.findOne({ email, otp });

      if (!otpRecord) {
        return res.status(400).json({ message: 'Invalid OTP' });
      }

      // OTP is valid, delete it from the database
      await OtpModel.deleteOne({ _id: otpRecord._id });

      res.status(200).json({ message: 'OTP verified successfully' });
    } catch (error) {
      console.error('Error verifying OTP:', error);
      res.status(500).json({ message: 'Failed to verify OTP' });
    }
  }
};

module.exports = otpController;