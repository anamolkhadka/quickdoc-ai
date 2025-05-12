// src/api/openai.js
import axios from 'axios';

const API_URL = 'https://api.openai.com/v1/chat/completions';

export const fetchOpenAIResponse = async (message) => {
    const systemPrompt = {
        role: 'system',
        content:
            'You are QuickDoc, an empathetic virtual doctor. Provide safe, friendly, and general medical advice in less than 5/6 sentences. Always advise users to consult a licensed medical professional for serious or emergency concerns.',
    };

    const userMessage = {
        role: 'user',
        content: message,
    };

    try {
        const response = await axios.post(
            API_URL,
            {
                model: 'gpt-4o-mini',
                messages: [systemPrompt, userMessage],
                temperature: 0.7,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
                },
            }
    );
    //console.log('OpenAI API Response:', response.data);
    return response.data.choices[0].message.content;

    } catch (error) {
        console.error('OpenAI API Error:', error);
        return "Sorry, I couldn't process your request at the moment.";
    }
};
