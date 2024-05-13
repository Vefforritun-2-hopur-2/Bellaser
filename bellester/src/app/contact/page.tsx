"use client"
import React, { useState } from 'react';

export default function Contact() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault(); 
    console.log('Sending contact info', { name, email, message });
    alert('Takk fyrir að hafa samband við munum svara eins fljótt og hægt er.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <h1>Spurningar? sendu á okkur.</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
