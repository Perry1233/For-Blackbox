const express = require('express');
const bcrypt = require('bcrypt');
const session = require('express-session');
const db = require('./database'); // MySQL database connection pool
const router = express.Router(); // Use the Router to define routes

// -------------- Patient Registration -------------- 
router.post('/register', async (req, res) => {
  const { first_name, email, password } = req.body;

  // Validate input
  if (!first_name || !email || !password) {
    return res.status(400).send('Please provide first_name, email, and password');
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Insert into the database with correct column names
    await db.query('INSERT INTO patients (first_name, email, password_hash) VALUES (?, ?, ?)', [first_name, email, hashedPassword]);
    res.status(201).send('Patient registered successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// -------------- Patient Login -------------- 
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).send('Please provide email and password');
  }

  try {
    // Find patient by email
    const [patients] = await db.query('SELECT * FROM patients WHERE email = ?', [email]);

    if (patients.length === 0) {
      return res.status(404).send('Patient not found');
    }

    const patient = patients[0];
    
    // Check if password is valid
    const isPasswordValid = await bcrypt.compare(password, patient.password_hash);

    if (!isPasswordValid) {
      return res.status(401).send('Invalid email or password');
    }

    // Start a session for the patient
    req.session.patientId = patient.id;
    req.session.patientName = patient.first_name; // Use first_name here

    res.json({ message: 'Login successful', patientId: patient.id });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// -------------- Middleware to Check Authentication -------------- 
const authenticate = (req, res, next) => {
  if (!req.session.patientId) {
    return res.status(401).send('Unauthorized: Please log in first');
  }
  next();
};

// -------------- Patient Profile Management -------------- 
router.get('/profile', authenticate, async (req, res) => {
  const patientId = req.session.patientId;

  try {
    const [patients] = await db.query('SELECT id, first_name, email FROM patients WHERE id = ?', [patientId]);

    if (patients.length === 0) {
      return res.status(404).send('Profile not found');
    }

    const patient = patients[0];
    res.json({ id: patient.id, first_name: patient.first_name, email: patient.email });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

router.put('/profile', authenticate, async (req, res) => {
  const { first_name } = req.body; // Change from name to first_name
  const patientId = req.session.patientId;

  if (!first_name) {
    return res.status(400).send('Please provide a new first_name');
  }

  try {
    await db.query('UPDATE patients SET first_name = ? WHERE id = ?', [first_name, patientId]);
    res.send('Profile updated successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// -------------- Logout -------------- 
router.post('/logout', authenticate, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Error logging out');
    }
    res.send('Logged out successfully');
  });
});


module.exports = router;
