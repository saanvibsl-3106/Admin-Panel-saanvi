const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  rollNo: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['Mentor', 'Mentee'],
    required: true
  },
  password: {
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

// JWT
userSchema.methods.generateToken = async function() {
  try {
    return jwt.sign({
      userId: this._id.toString(),
      username: this.username, // Make sure this field exists if used
      isAdmin: this.isAdmin,
    }, process.env.JWT_KEY, { expiresIn: '10m' });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
