import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    companyName: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Let's build something great together.</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
          <input type="text" name="companyName" placeholder="Company Name" onChange={handleChange} />
          <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="contact-info">
        <p>Email:sudhanshurawat123@gmail.com</p>
        <p>Dribbble: @ShivRawat</p>
        <p>Instagram: @shiv_._rawat</p>
      </div>
    </div>
  );
}

export default Contact;
