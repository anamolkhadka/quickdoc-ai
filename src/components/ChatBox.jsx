// src/components/ChatBox.jsx
import React, { useState, useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { fetchOpenAIResponse } from '../api/openai';
import '../css/ChatBox.css';

const SESSION_KEY = 'quickdoc_chat_history';

function ChatBox() {
    // Initialize messages from session storage if available
    const [messages, setMessages] = useState(() => {
        const storedMessages = sessionStorage.getItem(SESSION_KEY);
        return storedMessages ? JSON.parse(storedMessages) : [];
    });

    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef(null); // Reference to the end of the chat

    // Whenever messages change, update session storage
    useEffect(() => {
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(messages));
    }, [messages]);

    // Scroll to the bottom of the chat when new messages are added
    useEffect(() => {
        if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim()) return;
        // Add user message to the chat
        setMessages((prev) => [...prev, { text: input, sender: 'user' }]);
        setInput('');
        setIsTyping(true);

        // Get AI response
        const aiResponse = await fetchOpenAIResponse(input);
        setMessages((prev) => [...prev, { text: aiResponse, sender: 'bot' }]);
        setIsTyping(false);
    };
    return (
        <Card className="chat-box shadow-sm mb-4">
            <Card.Body className="chat-messages overflow-auto mb-2">
                {messages.map((msg, index) => (
                    <MessageBubble key={index} text={msg.text} sender={msg.sender} />
                ))}
                {isTyping && <TypingIndicator />}
                <div ref={chatEndRef} /> {/* Invisible div to scroll to */}
            </Card.Body>

            <InputGroup className="input-area p-2">
            <Form.Control
                type="text"
                className="input-field"
                value={input}
                placeholder="Describe your symptoms..."
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button variant="primary" className="send-button" onClick={handleSend}>
                Send
            </Button>
            </InputGroup>
        </Card>
    );
}

export default ChatBox;
