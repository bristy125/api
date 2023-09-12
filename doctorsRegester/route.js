const express = require('express');
const router = express.Router();
const doctorController = require('./app');

// GET all doctors
router.get('/', doctorController.getAllDoctors);

// GET a doctor by ID
router.get('/:id', doctorController.getDoctorById);

// CREATE a new doctor
router.post('/', doctorController.createDoctor);

// UPDATE a doctor by ID
router.put('/:id', doctorController.updateDoctor);

// DELETE a doctor by ID
router.delete('/:id', doctorController.deleteDoctor);

module.exports = router;
