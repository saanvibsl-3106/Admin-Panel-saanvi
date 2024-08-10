const User = require("../models/user-model");
const bcrypt = require('bcryptjs'); // Ensure bcrypt is imported

// Home handler
const home = async (req, res) => {
  try {
    res.status(200).send("Hello");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Register handler 
const register = async (req, res) => {
  try {
    const { rollNo, email, name, branch, year, role, password } = req.body;
    const isAdmin = false; // Default value

    // Check if the user already exists
    const existingUser = await User.findOne({ $or: [{ rollNo }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const newUser = new User({ rollNo, email, name, branch, year, role, password, isAdmin });
    await newUser.save();

    // Generate a token
    const token = await newUser.generateToken();
    
    res.status(201).json({
      message: "Registration successful",
      token,
      userId: newUser._id.toString(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Login handler
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate a token
    const token = await user.generateToken();

    res.status(200).json({
      message: "Login successful",
      token,
      userId: user._id.toString(),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const user = async (req, res) => {
  try {
    // const userData = await User.find({});
    const userData = req.user;
    return res.status(200).json({ msg: userData });
  } catch (error) {
    console.log(` error from user route ${error}`);
    res.status(500).json({ message: "Server error" });
  }
};

// Export the handlers
module.exports = { home, register, login, user };
