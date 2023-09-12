const pool = require('../db');

const Feedback = {
  getAllFeedback: (req, res) => {
    pool.query('SELECT * FROM feedback', (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching feedback' });
      } else {
        res.json(results);
      }
    });
  },

  getFeedbackById: (req, res) => {
    const id = req.params.id;
    pool.query('SELECT * FROM feedback WHERE Id = ?', [id], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching feedback by ID' });
      } else {
        res.json(results);
      }
    });
  },

  createFeedback: (req, res) => {
    const { name, comments, rate } = req.body;

    if (!name || !comments || !rate) {
      return res.status(400).json({ message: 'Name, comments, and rate fields are required' });
    }

    pool.query(
      'INSERT INTO feedback (name, comments, rate) VALUES (?, ?, ?)',
      [name, comments, rate],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Error creating feedback' });
        } else {
          res.json({ message: 'Feedback created successfully' });
        }
      }
    );
  },

  updateFeedback: (req, res) => {
    const id = req.params.id;
    const { name, comments, rate } = req.body;

    if (!name || !comments || !rate) {
      return res.status(400).json({ message: 'Name, comments, and rate fields are required' });
    }

    pool.query(
      'UPDATE feedback SET name = ?, comments = ?, rate = ? WHERE Id = ?',
      [name, comments, rate, id],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Error updating feedback' });
        } else {
          res.json({ message: 'Feedback updated successfully' });
        }
      }
    );
  },

  deleteFeedback: (req, res) => {
    const id = req.params.id;

    pool.query(
      'DELETE FROM feedback WHERE Id = ?',
      [id],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Error deleting feedback' });
        } else {
          res.json({ message: 'Feedback deleted successfully' });
        }
      }
    );
  },
};

module.exports = Feedback;
