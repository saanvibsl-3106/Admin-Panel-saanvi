const User = require('../models/user-model'); // Adjust path as needed

// Check if user exists by email or roll number
const checkUser = async (req, res, next) => {
  const { email, rollNo } = req.body;

  try {
    // Check if a user with the provided email or roll number exists
    const existingUser = await User.findOne({ $or: [{ email }, { rollNo }] });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Proceed if user does not exist
    next();
  } catch (error) {
    console.error('Error checking user existence:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  // ...other controllers
  checkUser
};
