// controllers/addPatientController.js

const AddPatient = require('../models/addPatientModel');

exports.submitForm = async (req, res) => {
  try {
    const {
      invoiceNo,
      receiveDate,
      reportingDate,
      patientName,
      age,
      sex,
      consultant,
      investigations,
      clinicalInfo,
    } = req.body;

    // Create a new form submission record
    const newSubmission = await AddPatient.create({
      invoiceNo,
      receiveDate,
      reportingDate,
      patientName,
      age,
      sex,
      consultant,
      investigations,
      clinicalInfo,
    });

    // Respond with the created record
    res.status(201).json(newSubmission);
  } catch (error) {
    // Log the error and respond with a 500 status code
    console.error('Error submitting form:', error);
    res.status(500).json({ error: error.message });
  }
};
