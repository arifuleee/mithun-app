// src/pages/AddPatientForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitForm } from '../services/api'; // Import the new API function

const AddPatientForm = () => {
  const [formData, setFormData] = useState({
    invoiceNo: '',
    receiveDate: '',
    reportingDate: '',
    patientName: '',
    age: '',
    sex: '',
    consultant: '',
    investigations: '',
    clinicalInfo: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitForm(formData); // Use the submitForm function
      alert('Form submitted successfully');
      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Add Patient Form</h1>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div className="mb-3" key={key}>
            <label htmlFor={key} className="form-label">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </label>
            <input
              type={key.includes('Date') ? 'date' : 'text'}
              name={key}
              className="form-control"
              id={key}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddPatientForm;
