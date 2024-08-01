const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    res.status(200).send("Hello");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const register = async (req, res) => {
  try {
    const { username, password, phone, isAdmin } = req.body;
    
    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({ username, password, phone, isAdmin });
    await newUser.save();

    res.status(201).json({ message: 'Registration successful', data: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { home, register };
