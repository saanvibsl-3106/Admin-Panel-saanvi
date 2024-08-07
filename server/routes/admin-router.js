const express = require('express');
const router = express.Router();
const { getAllUsers, getAllExp, deleteUser, deleteExperience } = require('../controllers/admin-controller');

// Define routes
router.route('/users').get(getAllUsers);
router.route('/users/delete/:id').delete(deleteUser); // Route to delete a user

router.route('/experiences').get(getAllExp);
router.route('/experiences/delete/:id').delete(deleteExperience); // Route to delete an experience

module.exports = router;
