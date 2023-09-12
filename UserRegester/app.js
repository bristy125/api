const pool = require('../db');

const userController = {
  // GET all users
  getAllUsers: (req, res) => {
    pool.query('SELECT * FROM users', (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching users' });
      } else {
        res.json(results);
      }
    });
  },

  // GET a user by ID
  getUserById: (req, res) => {
    const id = req.params.id;
    pool.query('SELECT * FROM users WHERE Id = ?', [id], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching user by ID' });
      } else {
        res.json(results);
      }
    });
  },

  // CREATE a new user
  createUser: (req, res) => {
    const { name, email, mobile, password } = req.body;

    if (!name || !email || !mobile || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const values = [name, email, mobile, password];

    pool.query(
      'INSERT INTO users (name, email, mobile, password) VALUES (?, ?, ?, ?)',
      values,
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Error creating user' });
        } else {
          res.json({ message: 'User created successfully' });
        }
      }
    );
  },

  // UPDATE a user by ID (Add this route if needed)
  updateUser: (req, res) => {
    const id = req.params.id;
    const { name, email, mobile, password } = req.body;

    if (!name || !email || !mobile || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const values = [name, email, mobile, password, id];

    pool.query(
      'UPDATE users SET name = ?, email = ?, mobile = ?, password = ? WHERE Id = ?',
      values,
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Error updating user' });
        } else {
          res.json({ message: 'User updated successfully' });
        }
      }
    );
  },

  // DELETE a user by ID (Add this route if needed)
  deleteUser: (req, res) => {
    const id = req.params.id;

    pool.query(
      'DELETE FROM users WHERE Id = ?',
      [id],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Error deleting user' });
        } else {
          res.json({ message: 'User deleted successfully' });
        }
      }
    );
  },
};

module.exports = userController;
