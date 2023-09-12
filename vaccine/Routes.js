const express = require('express');
const router = express.Router();
const vaccineController = require('../vaccine/vaccineController');

// GET all vaccines
router.get('/', vaccineController.getAllVaccines);

// GET a vaccine by ID
router.get('/:id', vaccineController.getVaccineById);

// CREATE a new vaccine
router.post('/', vaccineController.createVaccine);

// UPDATE a vaccine by ID
router.put('/:id', vaccineController.updateVaccine);

// DELETE a vaccine by ID
router.delete('/:id', vaccineController.deleteVaccine);

module.exports = router;
