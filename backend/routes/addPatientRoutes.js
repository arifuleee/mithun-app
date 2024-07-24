// routes/addPatientRoutes.js

const express = require('express');
const { submitForm } = require('../controllers/addPatientController');
const router = express.Router();

router.post('/add-patient', submitForm);

module.exports = router;

