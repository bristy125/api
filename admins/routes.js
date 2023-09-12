const express = require('express');
const router = express.Router();
const adminController = require('./app');

router.get('/', adminController.getAllAdmins);
router.post('/', adminController.createAdmin);

module.exports = router;
