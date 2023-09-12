const pool = require('../db');

const resetPasswordController = {
  createResetRequest: (req, res) => {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email field is required' });
    }

    const values = [email];

    pool.query(
      'INSERT INTO reset_password (email) VALUES (?)',
      values,
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Error creating reset request' });
        } else {
          res.json({ message: 'Reset request created successfully' });
        }
      }
    );
  },

  
};

module.exports = resetPasswordController;
