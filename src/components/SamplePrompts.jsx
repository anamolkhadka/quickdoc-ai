import React from 'react';
import { ListGroup } from 'react-bootstrap';
import '../css/SamplePrompts.css'; // Optional: if you want custom styles

function SamplePrompts() {
    const prompts = [
    'I have a headache.',
    'What should I do for a sore throat?',
    'I feel anxious lately.',
    'Can I exercise with a cold?',
    'What are symptoms of flu?',
    ];

    return (
        <div className="sample-prompts mb-4">
            <h5>💡 Try asking:</h5>
            <ListGroup>
                {prompts.map((prompt, index) => (
                    <ListGroup.Item className="sample-prompt-item" key={index}>
                    {prompt}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}

export default SamplePrompts;