import React, { useState } from 'react';
import './ContactForm.css';
import emailjs from 'emailjs-com';
import { FaPhone, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dfzuf3l', 'template_c7qvp8i', e.target, 'rCgeM3so8vpwB8yvD')
      .then((result) => {
        console.log(result.text);
        setSent(true);
        setError('');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, (error) => {
        console.log(error.text);
        setSent(false);
        setError('Failed to send message. Please try again later.');
      });
  };

  return (
    <>
    <div className="heading">
      <h1>Contact me</h1>
    </div>
    <div className="contact-container">
      
      
      <div className="contact-info">
        <div className="contact-info-item">
          <FaPhone />
          <span>03079618398</span>
        </div>
        <div className="contact-info-item">
          <FaWhatsapp />
          <span>03079618398</span>
        </div>
        <div className="contact-info-item">
          <FaLinkedin />
         <a href="https://www.linkedin.com/in/ahmad-raza416" target="_blank"> <span>LinkedIn Profile</span></a>
        </div>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
          </div>
          {sent && <div className="success-message">Message sent successfully!</div>}
          {error && <div className="error-message">{error}</div>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactForm;
