const express = require('express');
const router = express.Router();
const resetPasswordController = require('./app');

// Create a reset password request
router.post('/', resetPasswordController.createResetRequest);



module.exports = router;
