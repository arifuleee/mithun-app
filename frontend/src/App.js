import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Chatbot from './components/Chatbot'; // Add this import
import Navbar from './components/Navbar';
import AddPatientForm from './pages/AddPatientForm'; // Add this import
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Signup from './pages/Signup';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chatbot" element={<Chatbot />} /> {/* Add this route */}
          <Route path="/add-patient" element={<AddPatientForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;