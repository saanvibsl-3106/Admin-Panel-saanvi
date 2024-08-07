const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, Token not provided" });
  }

  // Remove "Bearer " prefix from token
  const jwtToken = token.replace("Bearer ", "").trim();

  try {
    // Verify token
    const isVerified = jwt.verify(jwtToken, process.env.JWT_KEY);
    
    // Find the user
    const userData = await User.findById(isVerified.userId).select({
      password: 0,
    });

    if (!userData) {
      return res.status(401).json({ message: "Unauthorized. User not found." });
    }

    req.token = token;
    req.user = userData;
    req.userID = userData._id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized. Invalid token." });
  }
};

module.exports = authMiddleware;
