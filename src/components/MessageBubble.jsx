// src/components/MessageBubble.jsx
import React from 'react';
import '../css/MessageBubble.css';


function MessageBubble({ text, sender }) {
    const icon = sender === 'user' ? '👤' : '🤖';
    const bubbleClass =
    sender === 'user'
        ? 'bg-primary text-white align-self-end'
        : 'bg-light text-dark align-self-start';

    return (
        <div className={`d-flex mb-2 ${sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
            <div className={`message-bubble p-2 rounded ${bubbleClass}`}>
                <span className="icon me-2">{icon}</span>
                {text}
            </div>
        </div>
    );
}

export default MessageBubble;
