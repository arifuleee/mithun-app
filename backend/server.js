// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const registerRoutes = require('./routes/registerRoutes');
const addPatientRoutes = require('./routes/addPatientRoutes'); // Add this import
const sequelize = require('./config/db');
const User = require('./models/userModel');
const AddPatient = require('./models/addPatientModel'); // Add this import

// Load environment variables from .env file
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/signup', authRoutes);
app.use('/api', registerRoutes);
app.use('/api', addPatientRoutes); // Add this line

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

sequelize.sync()
  .then(() => {
    app.listen(5000, () => {
      console.log('Server is running on port 5000');
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
