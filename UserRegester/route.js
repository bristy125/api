const express = require('express');
const router = express.Router();
const userController = require('../UserRegester/app');

// GET all users
router.get('/', userController.getAllUsers);

// GET a user by ID
router.get('/:id', userController.getUserById);

// CREATE a new user
router.post('/', userController.createUser);

// UPDATE a user by ID (Add this route if needed)
router.put('/:id', userController.updateUser);

// DELETE a user by ID (Add this route if needed)
router.delete('/:id', userController.deleteUser);

module.exports = router;
