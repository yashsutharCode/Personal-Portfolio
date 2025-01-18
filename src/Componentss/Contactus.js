import React, { useState } from 'react';
import './Contactus.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous messages
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: '298939c5-78f7-4da3-9c64-063ff9093e64',
          ...formData
        })
      });

      if (response.ok) {
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        const errorData = await response.json();
        setErrorMessage(`Error: ${errorData.message || 'Something went wrong'}`);
      }
    } catch (error) {
      setErrorMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div id='contact' className="container1">

      <form onSubmit={handleSubmit} className="form">
      <h2 className="title">
        <span id='ct' >Contact</span>
        <span> Form</span>
      </h2>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control thick"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control thick"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control message"
            placeholder="Your Message"
            rows="4"
            required
          />
        </div>
        {errorMessage && <span className="error">{errorMessage}</span>}
        {successMessage && <span className="success-message">{successMessage}</span>}
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
