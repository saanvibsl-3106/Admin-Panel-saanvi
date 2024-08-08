const jwt = require('jsonwebtoken');
const { User } = require('../models/user-model'); // Adjust path as necessary

const isAdmin = async (req, res, next) => {
    try {
        // Check if the user object is attached to the request
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized. User not authenticated." });
        }

        // Check if the user has admin privileges
        if (!req.user.isAdmin) {
            return res.status(403).json({ message: 'Forbidden: Admins only' });
        }

        // If the user is an admin, proceed to the next middleware/route handler
        next();
    } catch (error) {
        console.error("Admin check error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { isAdmin };