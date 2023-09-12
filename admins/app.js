const pool = require('../db');

const adminController = {
  getAllAdmins: (req, res) => {
    pool.query('SELECT * FROM admins', (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  },

  createAdmin: (req, res) => {
    const { email, password } = req.body;
    pool.query('INSERT INTO admins (email, password) VALUES (?, ?)', [email, password], (error, results) => {
      if (error) throw error;
      res.json({ message: 'Admin created successfully' });
    });
  },
};

module.exports = adminController;
