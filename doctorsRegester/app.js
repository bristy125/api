const pool = require('../db');

const Doctor = {
  getAllDoctors: (req, res) => {
    pool.query('SELECT * FROM doctorRegester', (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching pets' });
      } else {
        res.json(results);
      }
    });
  },

  getDoctorById: (req, res) => {
    const id = req.params.id; // Get the ID from the request parameters
    pool.query('SELECT * FROM doctorRegester WHERE ID = ?', [id], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching pet by ID' });
      } else {
        res.json(results);
      }
    });
  },

  createDoctor: (req, res) => {
    const doctor = req.body; // Assuming the doctor object is sent in the request body
    pool.query(
      'INSERT INTO doctorRegester (Name, specialities, description, scheduleDay, scheduleTime, Summary) VALUES (?, ?, ?, ?, ?, ?)',
      [
        doctor.Name,
        doctor.specialities,
        doctor.description,
        doctor.scheduleDay,
        doctor.scheduleTime,
        doctor.Summary,
      ],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Error creating pet' });
        } else {
          res.json({ message: 'Pet created successfully' });
        }
      }
    );
  },

  updateDoctor: (req, res) => {
    const id = req.params.id; // Get the ID from the request parameters
    const doctor = req.body; // Assuming the doctor object is sent in the request body
    pool.query(
      'UPDATE doctorRegester SET Name = ?, specialities = ?, description = ?, scheduleDay = ?, scheduleTime = ?, Summary = ? WHERE ID = ?',
      [
        doctor.Name,
        doctor.specialities,
        doctor.description,
        doctor.scheduleDay,
        doctor.scheduleTime,
        doctor.Summary,
        id,
      ],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({ message: 'Error fetching pet by ID' });
        } else {
          res.json(results);
        }
      }
    );
  },

  deleteDoctor: (req, res) => {
    const id = req.params.id; // Get the ID from the request parameters
    pool.query('DELETE FROM doctorRegester WHERE ID = ?', [id], (error) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching pet by ID' });
      } else {
        res.json(results);
      }
    });
  },
};

module.exports = Doctor;
