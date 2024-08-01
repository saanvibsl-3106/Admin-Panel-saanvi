const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // To hash passwords

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true // Ensure unique usernames
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// Hash the password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (err) {
    next(err);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
