const User = require('../models/user-model');
const Experience = require('../models/experince-model');

// Function to get all users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ msg: "No users found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error); // Pass errors to the error handling middleware
  }
};

// Function to get all experiences
const getAllExp = async (req, res, next) => {
  try {
    const exp = await Experience.find();
    if (!exp || exp.length === 0) {
      return res.status(404).json({ msg: "No experiences found" });
    }
    return res.status(200).json(exp);
  } catch (error) {
    next(error); // Pass errors to the error handling middleware
  }
};

// Function to delete a user by ID
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await User.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ msg: "User not found" });
    }
    return res.status(200).json({ msg: "User deleted successfully" });
  } catch (error) {
    next(error); // Pass errors to the error handling middleware
  }
};

// Function to delete an experience by ID
const deleteExperience = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Experience.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ msg: "Experience not found" });
    }
    return res.status(200).json({ msg: "Experience deleted successfully" });
  } catch (error) {
    next(error); // Pass errors to the error handling middleware
  }
};

module.exports = { getAllUsers, getAllExp, deleteUser, deleteExperience };
