// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;
// const db = require('./database');  // Importing the connection pool

// app.use(express.json()); // Middleware to parse JSON bodies

// // Root Route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Express.js Application with MySQL!');
// });

// // -------------- Patients Routes --------------
// app.get('/patients', async (req, res) => {
//   try {
//     const [rows] = await db.query('SELECT * FROM patients');
//     res.json(rows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Database error');
//   }
// });

// app.get('/patients/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     const [rows] = await db.query('SELECT * FROM patients WHERE id = ?', [id]);
//     if (rows.length > 0) {
//       res.json(rows[0]);
//     } else {
//       res.status(404).send('Patient not found');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Database error');
//   }
// });

// app.post('/patients', async (req, res) => {
//   const { name, age, address } = req.body;
//   try {
//     const result = await db.query('INSERT INTO patients (name, age, address) VALUES (?, ?, ?)', [name, age, address]);
//     res.status(201).send(`Patient created with ID: ${result[0].insertId}`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Database error');
//   }
// });

// app.put('/patients/:id', async (req, res) => {
//   const id = req.params.id;
//   const { name, age, address } = req.body;
//   try {
//     await db.query('UPDATE patients SET name = ?, age = ?, address = ? WHERE id = ?', [name, age, address, id]);
//     res.send(`Patient with ID: ${id} updated`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Database error');
//   }
// });

// app.delete('/patients/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     await db.query('DELETE FROM patients WHERE id = ?', [id]);
//     res.send(`Patient with ID: ${id} deleted`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Database error');
//   }
// });

// // -------------- Doctors Routes --------------
// app.get('/doctors', async (req, res) => {
//   try {
//     const [rows] = await db.query('SELECT * FROM doctors');
//     res.json(rows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Database error');
//   }
// });

// app.get('/doctors/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     const [rows] = await db.query('SELECT * FROM doctors WHERE id = ?', [id]);
//     if (rows.length > 0) {
//       res.json(rows[0]);
//     } else {
//       res.status(404).send('Doctor not found');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Database error');
//   }
// });

// app.post('/doctors', async (req, res) => {
//   const { name, specialty } = req.body;
//   try {
//     const result = await db.query('INSERT INTO doctors (name, specialty) VALUES (?, ?)', [name, specialty]);
//     res.status(201).send(`Doctor created with ID: ${result[0].insertId}`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Database error');
//   }
// });

// app.put('/doctors/:id', async (req, res) => {
//   const id = req.params.id;
//   const { name, specialty } = req.body;
//   try {
//     await db.query('UPDATE doctors SET name = ?, specialty = ? WHERE id = ?', [name, specialty, id]);
//     res.send(`Doctor with ID: ${id} updated`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Database error');
//   }
// });

// app.delete('/doctors/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     await db.query('DELETE FROM doctors WHERE id = ?', [id]);
//     res.send(`Doctor with ID: ${id} deleted`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Database error');
//   }
// });

// // -------------- Appointments Routes --------------
// app.get('/appointments', async (req, res) => {
//   try {
//     const [rows] = await db.query('SELECT * FROM appointments');
//     res.json(rows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Database error');
//   }
// });

// app.get('/appointments/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     const [rows] = await db.query('SELECT * FROM appointments WHERE id = ?', [id]);
//     if (rows.length > 0) {
//       res.json(rows[0]);
//     } else {
//       res.status(404).send('Appointment not found');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Database error');
//   }
// });

// app.post('/appointments', async (req, res) => {
//   const { patient_id, doctor_id, date, time } = req.body;
//   try {
//     const result = await db.query('INSERT INTO appointments (patient_id, doctor_id, date, time) VALUES (?, ?, ?, ?)', [patient_id, doctor_id, date, time]);
//     res.status(201).send(`Appointment created with ID: ${result[0].insertId}`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Database error');
//   }
// });

// app.put('/appointments/:id', async (req, res) => {
//   const id = req.params.id;
//   const { patient_id, doctor_id, date, time } = req.body;
//   try {
//     await db.query('UPDATE appointments SET patient_id = ?, doctor_id = ?, date = ?, time = ? WHERE id = ?', [patient_id, doctor_id, date, time, id]);
//     res.send(`Appointment with ID: ${id} updated`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Database error');
//   }
// });

// app.delete('/appointments/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     await db.query('DELETE FROM appointments WHERE id = ?', [id]);
//     res.send(`Appointment with ID: ${id} deleted`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Database error');
//   }
// });

// // -------------- Admin Routes --------------
// app.get('/admin', (req, res) => {
//   res.send('Admin dashboard');
// });

// app.post('/admin/add', async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const result = await db.query('INSERT INTO admin (username, password) VALUES (?, ?)', [username, password]);
//     res.status(201).send(`Admin created with ID: ${result[0].insertId}`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Database error');
//   }
// });

// app.delete('/admin/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     await db.query('DELETE FROM admin WHERE id = ?', [id]);
//     res.send(`Admin with ID: ${id} deleted`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Database error');
//   }
// });

// // Starting the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// const express = require('express');
// const session = require('express-session');
// const db = require('./database'); // MySQL database connection pool
// const authRoutes = require('./authRoutes'); // Import the authRoutes
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Setup session middleware
// app.use(session({
//   secret: 'your_secret_key',  // Change this to a secure random key
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false } // Set to true if using HTTPS
// }));

// // Use the authentication routes
// app.use(authRoutes);

// // -------------- Main Application Routes --------------

// // Patients Routes
// app.get('/patients', (req, res) => {
//   res.send('Retrieve all patients');
// });

// app.get('/patients/:id', (req, res) => {
//   const id = req.params.id;
//   res.send(`Retrieve patient with ID: ${id}`);
// });

// app.post('/patients', (req, res) => {
//   res.send('Create a new patient');
// });

// app.put('/patients/:id', (req, res) => {
//   const id = req.params.id;
//   res.send(`Update patient with ID: ${id}`);
// });

// app.delete('/patients/:id', (req, res) => {
//   const id = req.params.id;
//   res.send(`Delete patient with ID: ${id}`);
// });

// // Doctors Routes
// app.get('/doctors', (req, res) => {
//   res.send('Retrieve all doctors');
// });

// app.get('/doctors/:id', (req, res) => {
//   const id = req.params.id;
//   res.send(`Retrieve doctor with ID: ${id}`);
// });

// app.post('/doctors', (req, res) => {
//   res.send('Create a new doctor');
// });

// app.put('/doctors/:id', (req, res) => {
//   const id = req.params.id;
//   res.send(`Update doctor with ID: ${id}`);
// });

// app.delete('/doctors/:id', (req, res) => {
//   const id = req.params.id;
//   res.send(`Delete doctor with ID: ${id}`);
// });

// // Appointments Routes
// app.get('/appointments', (req, res) => {
//   res.send('Retrieve all appointments');
// });

// app.get('/appointments/:id', (req, res) => {
//   const id = req.params.id;
//   res.send(`Retrieve appointment with ID: ${id}`);
// });

// app.post('/appointments', (req, res) => {
//   res.send('Create a new appointment');
// });

// app.put('/appointments/:id', (req, res) => {
//   const id = req.params.id;
//   res.send(`Update appointment with ID: ${id}`);
// });

// app.delete('/appointments/:id', (req, res) => {
//   const id = req.params.id;
//   res.send(`Delete appointment with ID: ${id}`);
// });

// // Admin Routes
// app.get('/admin', (req, res) => {
//   res.send('Admin dashboard');
// });

// app.post('/admin/add', (req, res) => {
//   res.send('Add a new admin');
// });

// app.delete('/admin/:id', (req, res) => {
//   const id = req.params.id;
//   res.send(`Delete admin with ID: ${id}`);
// });

// // Starting the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// const express = require('express');
// const session = require('express-session');
// const db = require('./database'); // MySQL database connection pool
// const authRoutes = require('./authRoutes'); // Import the authRoutes
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware to parse incoming requests
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Setup session middleware
// app.use(session({
//   secret: 'your_secret_key',  // Change this to a secure random key
//   resave: false,
//   saveUninitialized: false, // Only save sessions with data
//   cookie: { secure: false } // Set to true if using HTTPS
// }));

// // Middleware to check if user is authenticated
// function isAuthenticated(req, res, next) {
//   if (req.session && req.session.patientId) {
//     return next();
//   } else {
//     return res.status(401).send('Unauthorized: Please log in first');
//   }
// }

// // Use the authentication routes
// app.use('/auth', authRoutes);

// // -------------- Main Application Routes --------------

// // Patients Routes (Protected)
// app.get('/patients', isAuthenticated, async (req, res) => {
//   try {
//     const [patients] = await db.query('SELECT id, first_name FROM patients');
//     res.json(patients);
//   } catch (error) {
//     res.status(500).send('Server error');
//   }
// });

// app.get('/patients/:id', isAuthenticated, async (req, res) => {
//   const id = req.params.id;
//   try {
//     const [patient] = await db.query('SELECT id, first_name FROM patients WHERE id = ?', [id]);
//     if (patient.length === 0) {
//       return res.status(404).send('Patient not found');
//     }
//     res.json(patient[0]);
//   } catch (error) {
//     res.status(500).send('Server error');
//   }
// });

// app.post('/patients', async (req, res) => {
//   // Add patient creation logic
//   res.send('Create a new patient');
// });

// app.put('/patients/:id', isAuthenticated, (req, res) => {
//   const id = req.params.id;
//   // Update patient logic
//   res.send(`Update patient with ID: ${id}`);
// });

// app.delete('/patients/:id', isAuthenticated, (req, res) => {
//   const id = req.params.id;
//   // Delete patient logic
//   res.send(`Delete patient with ID: ${id}`);
// });

// // Doctors Routes (Unprotected)
// app.get('/doctors', (req, res) => {
//   res.send('Retrieve all doctors');
// });

// app.get('/doctors/:id', (req, res) => {
//   const id = req.params.id;
//   res.send(`Retrieve doctor with ID: ${id}`);
// });

// app.post('/doctors', (req, res) => {
//   res.send('Create a new doctor');
// });

// app.put('/doctors/:id', (req, res) => {
//   const id = req.params.id;
//   res.send(`Update doctor with ID: ${id}`);
// });

// app.delete('/doctors/:id', (req, res) => {
//   const id = req.params.id;
//   res.send(`Delete doctor with ID: ${id}`);
// });

// // Appointments Routes (Protected)
// app.get('/appointments', isAuthenticated, (req, res) => {
//   res.send('Retrieve all appointments');
// });

// app.get('/appointments/:id', isAuthenticated, (req, res) => {
//   const id = req.params.id;
//   res.send(`Retrieve appointment with ID: ${id}`);
// });

// app.post('/appointments', isAuthenticated, async (req, res) => {
//   const { doctor_id, appointment_date, appointment_time } = req.body;
//   const patientId = req.session.patientId;

//   try {
//     await db.query(
//       'INSERT INTO appointments (patient_id, doctor_id, appointment_date, appointment_time, status) VALUES (?, ?, ?, ?, ?)',
//       [patientId, doctor_id, appointment_date, appointment_time, 'pending']
//     );
//     res.status(201).send('Appointment booked successfully');
//   } catch (error) {
//     res.status(500).send('Server error');
//   }
// });

// app.put('/appointments/:id', isAuthenticated, (req, res) => {
//   const id = req.params.id;
//   res.send(`Update appointment with ID: ${id}`);
// });

// app.delete('/appointments/:id', isAuthenticated, (req, res) => {
//   const id = req.params.id;
//   res.send(`Delete appointment with ID: ${id}`);
// });

// // Admin Routes (Unprotected for now, can be protected similarly)
// app.get('/admin', (req, res) => {
//   res.send('Admin dashboard');
// });

// app.post('/admin/add', (req, res) => {
//   res.send('Add a new admin');
// });

// app.delete('/admin/:id', (req, res) => {
//   const id = req.params.id;
//   res.send(`Delete admin with ID: ${id}`);
// });

// // -------------- Logout Route (Protected) --------------
// app.post('/logout', isAuthenticated, (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       return res.status(500).send('Error logging out');
//     }
//     res.clearCookie('connect.sid'); // Clear the session cookie
//     res.send('Logged out successfully');
//   });
// });

// // Starting the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require('express');
const bcrypt = require('bcrypt');
const session = require('express-session');
const db = require('./database'); // MySQL database connection pool
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup session middleware
app.use(session({
  secret: 'your_secret_key',  // Change this to a secure random key
  resave: false,
  saveUninitialized: false, // Only save sessions with data
  cookie: { secure: false } // Set to true if using HTTPS
}));

// Middleware to check if user is authenticated
function isAuthenticated(req, res, next) {
  if (req.session && req.session.patientId) {
    return next();
  } else {
    return res.status(401).send('Unauthorized: Please log in first');
  }
}

// -------------- Patient Registration -------------- 
app.post('/auth/register', async (req, res) => {
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
app.post('/auth/login', async (req, res) => {
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

// -------------- Patient Profile Management -------------- 
app.get('/auth/profile', isAuthenticated, async (req, res) => {
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

app.put('/auth/profile', isAuthenticated, async (req, res) => {
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
app.post('/auth/logout', isAuthenticated, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send('Error logging out');
    }
    res.send('Logged out successfully');
  });
});

// -------------- Patients Routes (Protected) --------------
app.get('/patients', isAuthenticated, async (req, res) => {
  try {
    const [patients] = await db.query('SELECT id, first_name FROM patients');
    res.json(patients);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

app.get('/patients/:id', isAuthenticated, async (req, res) => {
  const id = req.params.id;
  try {
    const [patient] = await db.query('SELECT id, first_name FROM patients WHERE id = ?', [id]);
    if (patient.length === 0) {
      return res.status(404).send('Patient not found');
    }
    res.json(patient[0]);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

app.post('/patients', isAuthenticated, async (req, res) => {
  const { first_name, email } = req.body;
  try {
    const result = await db.query('INSERT INTO patients (first_name, email) VALUES (?, ?)', [first_name, email]);
    res.status(201).send(`Patient created with ID: ${result.insertId}`);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

app.put('/patients/:id', isAuthenticated, async (req, res) => {
  const id = req.params.id;
  const { first_name } = req.body;

  try {
    await db.query('UPDATE patients SET first_name = ? WHERE id = ?', [first_name, id]);
    res.send(`Updated patient with ID: ${id}`);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

app.delete('/patients/:id', isAuthenticated, async (req, res) => {
  const id = req.params.id;
  try {
    await db.query('DELETE FROM patients WHERE id = ?', [id]);
    res.send(`Deleted patient with ID: ${id}`);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// -------------- Doctors Routes (Unprotected) --------------
app.get('/doctors', (req, res) => {
  res.send('Retrieve all doctors');
});

app.get('/doctors/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Retrieve doctor with ID: ${id}`);
});

app.post('/doctors', (req, res) => {
  res.send('Create a new doctor');
});

app.put('/doctors/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Update doctor with ID: ${id}`);
});

app.delete('/doctors/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete doctor with ID: ${id}`);
});

// -------------- Appointments Routes (Protected) --------------
app.get('/appointments', isAuthenticated, (req, res) => {
  res.send('Retrieve all appointments');
});

app.get('/appointments/:id', isAuthenticated, (req, res) => {
  const id = req.params.id;
  res.send(`Retrieve appointment with ID: ${id}`);
});

app.post('/appointments', isAuthenticated, async (req, res) => {
  const { doctor_id, appointment_date, appointment_time } = req.body;
  const patientId = req.session.patientId;

  try {
    await db.query(
      'INSERT INTO appointments (patient_id, doctor_id, appointment_date, appointment_time, status) VALUES (?, ?, ?, ?, ?)',
      [patientId, doctor_id, appointment_date, appointment_time, 'pending']
    );
    res.status(201).send('Appointment booked successfully');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

app.put('/appointments/:id', isAuthenticated, (req, res) => {
  const id = req.params.id;
  res.send(`Update appointment with ID: ${id}`);
});

app.delete('/appointments/:id', isAuthenticated, (req, res) => {
  const id = req.params.id;
  res.send(`Delete appointment with ID: ${id}`);
});

// -------------- Admin Routes (Unprotected for now, can be protected similarly) --------------
app.get('/admin', (req, res) => {
  res.send('Admin dashboard');
});

app.post('/admin/add', (req, res) => {
  res.send('Add a new admin');
});

app.delete('/admin/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Delete admin with ID: ${id}`);
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
