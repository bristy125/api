const express = require('express');
const router = express.Router();
const feedbackController = require('../feedback/app');

// GET all feedback
router.get('/', feedbackController.getAllFeedback);

// GET feedback by ID
router.get('/:id', feedbackController.getFeedbackById);

// CREATE feedback
router.post('/', feedbackController.createFeedback);

// UPDATE feedback by ID
router.put('/:id', feedbackController.updateFeedback);

// DELETE feedback by ID
router.delete('/:id', feedbackController.deleteFeedback);

module.exports = router;
