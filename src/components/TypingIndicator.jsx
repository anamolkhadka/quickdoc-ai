// src/components/TypingIndicator.jsx
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import '../css/TypingIndicator.css';

function TypingIndicator() {
  return (
    <div className="typing-indicator d-flex align-items-center mb-2">
      <Spinner animation="border" size="sm" variant="primary" className="me-2" />
      <span>QuickDoc is thinking...</span>
    </div>
  );
}

export default TypingIndicator;