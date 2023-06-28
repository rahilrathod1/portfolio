import React, { useState } from 'react';

const EmailBox = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform additional actions here, such as sending the email to a server or storing it in a database.
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div>
      <h2>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default EmailBox;