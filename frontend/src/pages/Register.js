import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendRegistrationEmail } from '../services/api';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    grade: '',
    email: '',
    contactNumber: '',
    address: '',
    interestReason: '',
    courseInterest: 'Beginner'
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendRegistrationEmail(formData);
      setMessage('Your request is being processed. Please give us time for the verification and after verification an email will be sent within 72 hours providing the login information. Thanks for your concern.');
      setTimeout(() => {
        navigate('/');
      }, 5000);
    } catch (error) {
      console.error('Error during registration:', error);
      setMessage('Failed to send registration details. Please try again later.');
    }
  };

  return (
    <div className="container mt-4">
      <h1>Register</h1>
      {message && <p className="alert alert-info">{message}</p>}
      {!message && (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" name="name" className="form-control" id="name" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="school" className="form-label">School/Institute Name</label>
            <input type="text" name="school" className="form-control" id="school" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="grade" className="form-label">Class/Grade</label>
            <input type="text" name="grade" className="form-control" id="grade" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" name="email" className="form-control" id="email" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="contactNumber" className="form-label">Contact Number</label>
            <input type="text" name="contactNumber" className="form-control" id="contactNumber" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" name="address" className="form-control" id="address" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="interestReason" className="form-label">Why interested in STEM education</label>
            <textarea name="interestReason" className="form-control" id="interestReason" onChange={handleChange} required></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="courseInterest" className="form-label">In which course are you interested</label>
            <select name="courseInterest" className="form-control" id="courseInterest" onChange={handleChange}>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Register;
