import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const signup = (userData) => axios.post(`${API_URL}/auth/signup`, userData);
export const login = (userData) => axios.post(`${API_URL}/auth/login`, userData);

export const sendRegistrationEmail = (formData) => axios.post(`${API_URL}/register`, formData);

// Add this new function for submitting the form data
export const submitForm = (formData) => axios.post(`${API_URL}/add-patient`, formData);
