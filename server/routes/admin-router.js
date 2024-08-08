const express = require('express');
const router = express.Router();
const { getAllUsers, getAllExp, deleteUser, deleteExperience } = require('../controllers/admin-controller');
const authenticate = require('../middlewares/user-middleware');
const { isAdmin } = require('../middlewares/admin-middleware');

// Define routes with middleware
router.get('/users', authenticate, isAdmin, getAllUsers);
router.delete('/users/:id', authenticate, isAdmin, deleteUser);

router.get('/experiences', authenticate, isAdmin, getAllExp);
router.delete('/experiences/:id', authenticate, isAdmin, deleteExperience);

module.exports = router;