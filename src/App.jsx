// src/App.jsx
import React, { useState } from 'react';
import ChatBox from './components/ChatBox';
import SamplePrompts from './components/SamplePrompts';
import './css/App.css';  // Optional: if you want custom styles

function App() {
  return (
    <div className="app my-4 px-3">
      <header className="mb-4">
        <h1 className="display-4">QuickDoc 🩺</h1>
        <p className="tagline lead">Your AI doctor, always on call.</p>
        <p className="description">
          QuickDoc is your personal AI health assistant. Ask questions, get advice,
          and learn when to visit a real doctor. This app is not a substitute for
          professional medical advice.
        </p>
      </header>
      <SamplePrompts />
      <ChatBox />
    </div>
  );
}

export default App;