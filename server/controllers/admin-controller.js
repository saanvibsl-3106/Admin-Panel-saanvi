// controllers/admin-controller.js
const User = require('../models/user-model');
const Experience = require('../models/experince-model');

// Get all users
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ msg: "No users found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// Add a new user
const addUser = async (req, res, next) => {
  try {
    const { username, email, role, password } = req.body;

    // Validate required fields
    if (!username || !email || !role || !password) {
      return res.status(400).json({ msg: "Username, email, role, and password are required" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create a new user
    const newUser = new User({ username, email, role, password });
    await newUser.save();

    return res.status(201).json({ msg: "User added successfully", user: newUser });
  } catch (error) {
    next(error);
  }
};

// Update an existing user
const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { username, email, role, password } = req.body;

    // Validate required fields
    if (!username || !email || !role || !password) {
      return res.status(400).json({ msg: "Username, email, role, and password are required" });
    }

    // Find and update the user
    const updatedUser = await User.findByIdAndUpdate(id, { username, email, role, password }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    return res.status(200).json({ msg: "User updated successfully", user: updatedUser });
  } catch (error) {
    next(error);
  }
};

// Get all experiences
const getAllExp = async (req, res, next) => {
  try {
    const exp = await Experience.find();
    if (!exp || exp.length === 0) {
      return res.status(404).json({ msg: "No experiences found" });
    }
    return res.status(200).json(exp);
  } catch (error) {
    next(error);
  }
};

// Add a new experience
const addExperience = async (req, res, next) => {
  try {
    const { name, experience } = req.body;

    // Validate required fields
    if (!name || !experience) {
      return res.status(400).json({ msg: "Name and experience are required" });
    }

    // Create a new experience
    const newExperience = new Experience({ name, experience });
    await newExperience.save();

    return res.status(201).json({ msg: "Experience added successfully", experience: newExperience });
  } catch (error) {
    next(error);
  }
};

// Update an existing experience
const updateExperience = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, experience } = req.body;

    // Validate required fields
    if (!name || !experience) {
      return res.status(400).json({ msg: "Name and experience are required" });
    }

    // Find and update the experience
    const updatedExperience = await Experience.findByIdAndUpdate(id, { name, experience }, { new: true });
    if (!updatedExperience) {
      return res.status(404).json({ msg: "Experience not found" });
    }

    return res.status(200).json({ msg: "Experience updated successfully", experience: updatedExperience });
  } catch (error) {
    next(error);
  }
};

// Delete a user
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const currentUser = req.user; // User data attached by auth middleware

    // Check if the current user is an admin
    if (!currentUser.isAdmin) {
      return res.status(403).json({ msg: "Unauthorized" });
    }

    // Find the user to delete
    const userToDelete = await User.findById(id);

    // Check if the user to delete is an admin
    if (userToDelete.isAdmin) {
      return res.status(403).json({ msg: "Cannot delete an admin user" });
    }

    const result = await User.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ msg: "User not found" });
    }
    return res.status(200).json({ msg: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};

// Delete an experience
const deleteExperience = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Experience.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ msg: "Experience not found" });
    }
    return res.status(200).json({ msg: "Experience deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllUsers, addUser, updateUser, deleteUser, getAllExp, addExperience, updateExperience, deleteExperience };
