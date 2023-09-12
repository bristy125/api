const pool = require('../db');

const vaccineController = {
  getAllVaccines: (req, res) => {
    pool.query('SELECT * FROM vaccineList', (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching vaccines' });
      } else {
        res.json(results);
      }
    });
  },

  getVaccineById: (req, res) => {
    const id = req.params.id;
    pool.query('SELECT * FROM vaccineList WHERE ID = ?', [id], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching vaccine by ID' });
      } else {
        res.json(results);
      }
    });
  },

  createVaccine: (req, res) => {
    const { title, net, description, amount } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'Title field is required' });
    }

    const values = [title, net, description, amount];

    pool.query(
      'INSERT INTO vaccineList (title, net, description, amount) VALUES (?, ?, ?, ?)',
      values,
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Error creating vaccine' });
        } else {
          res.json({ message: 'Vaccine created successfully' });
        }
      }
    );
  },

  updateVaccine: (req, res) => {
    const id = req.params.id;
    const { title, net, description, amount } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'Title field is required' });
    }

    const values = [title, net, description, amount, id];

    pool.query(
      'UPDATE vaccineList SET title = ?, net = ?, description = ?, amount = ? WHERE ID = ?',
      values,
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Error updating vaccine' });
        } else {
          res.json({ message: 'Vaccine updated successfully' });
        }
      }
    );
  },

  deleteVaccine: (req, res) => {
    const id = req.params.id;

    pool.query(
      'DELETE FROM vaccineList WHERE ID = ?',
      [id],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Error deleting vaccine' });
        } else {
          res.json({ message: 'Vaccine deleted successfully' });
        }
      }
    );
  },
};

module.exports = vaccineController;
