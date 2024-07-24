// components/Chatbot.js

import axios from 'axios';
import React, { useState } from 'react';

const Chatbot = () => {
  const [question, setQuestion] = useState('');
  const [file, setFile] = useState(null);
  const [answer, setAnswer] = useState('');

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('question', question);
    if (file) {
      formData.append('file', file);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/chat', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setAnswer(response.data.answer);
    } catch (error) {
      console.error('Error submitting question:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Chat with Aurbot</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="question" className="form-label">Question</label>
          <input type="text" id="question" className="form-control" value={question} onChange={handleQuestionChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="file" className="form-label">Upload Image (Optional)</label>
          <input type="file" id="file" className="form-control" onChange={handleFileChange} accept="image/*" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {answer && (
        <div className="mt-4">
          <h3>Answer</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
