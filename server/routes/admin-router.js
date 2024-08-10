// routes/admin-routes.js
const express = require('express');
const router = express.Router();
const { getAllUsers, addUser, updateUser, deleteUser, getAllExp, addExperience, updateExperience, deleteExperience } = require('../controllers/admin-controller');
const authenticate = require('../middlewares/user-middleware');
const { isAdmin } = require('../middlewares/admin-middleware');

// Define routes with middleware
router.get('/users', authenticate, isAdmin, getAllUsers);
router.post('/users', authenticate, isAdmin, addUser); // Add user route
router.put('/users/:id', authenticate, isAdmin, updateUser); // Edit user route
router.delete('/users/:id', authenticate, isAdmin, deleteUser);

router.get('/experiences', authenticate, isAdmin, getAllExp);
router.post('/experiences', authenticate, isAdmin, addExperience); // Add experience route
router.put('/experiences/:id', authenticate, isAdmin, updateExperience); // Edit experience route
router.delete('/experiences/:id', authenticate, isAdmin, deleteExperience);

module.exports = router;
