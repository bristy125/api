const pool = require('../db');

const petController = {
  getAllPets: (req, res) => {
    pool.query('SELECT * FROM pets', (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching pets' });
      } else {
        res.json(results);
      }
    });
  },

  getPetById: (req, res) => {
    const id = req.params.id;
    pool.query('SELECT * FROM pets WHERE Id = ?', [id], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching pet by ID' });
      } else {
        res.json(results);
      }
    });
  },

  createPet: (req, res) => {
    const {
      name, email, mobile, pet_type,
      pet_habit, room_type, booking_from,
      booking_to, L_G_Name, L_G_Number, additional_comments
    } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Name field is required' });
    }

    const values = [
      name, email, mobile, pet_type,
      pet_habit, room_type, booking_from,
      booking_to, L_G_Name, L_G_Number, additional_comments
    ];

    pool.query(
      'INSERT INTO pets (name, email, mobile, pet_type, pet_habit, room_type, booking_from, booking_to, L_G_Name, L_G_Number, addintonal_comments) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      values,
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Error creating pet' });
        } else {
          res.json({ message: 'Pet created successfully' });
        }
      }
    );
  },

  updatePet: (req, res) => {
    const id = req.params.id;
    const {
      name, email, mobile, pet_type,
      pet_habit, room_type, booking_from,
      booking_to, L_G_Name, L_G_Number, additional_comments
    } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Name field is required' });
    }

    const values = [
      name, email, mobile, pet_type,
      pet_habit, room_type, booking_from,
      booking_to, L_G_Name, L_G_Number, additional_comments, id
    ];

    pool.query(
      'UPDATE pets SET name = ?, email = ?, mobile = ?, pet_type = ?, pet_habit = ?, room_type = ?, booking_from = ?, booking_to = ?, L_G_Name = ?, L_G_Number = ?, addintonal_comments = ? WHERE Id = ?',
      values,
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Error updating pet' });
        } else {
          res.json({ message: 'Pet updated successfully' });
        }
      }
    );
  },

  deletePet: (req, res) => {
    const id = req.params.id;

    pool.query(
      'DELETE FROM pets WHERE Id = ?',
      [id],
      (error, results) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Error deleting pet' });
        } else {
          res.json({ message: 'Pet deleted successfully' });
        }
      }
    );
  },
};

module.exports = petController;
