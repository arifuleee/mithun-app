import React from 'react';

const Home = () => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  return (
    <div className="container mt-4">
      <h1>Welcome to Pathology Report Management System</h1>
      {token && userRole === 'instructor' && (
        <div className="mb-3">
          <a href="/add-patient" className="btn btn-primary">Add Patient</a>
        </div>
      )}
    </div>
  );
};

export default Home;
