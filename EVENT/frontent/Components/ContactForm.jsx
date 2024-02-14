// ContactForm.jsx

// import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      
      <form className='ji'>
        <label htmlFor="name" className='label1'>Name:</label>
        <input type="text" id="name" name="name" className='inpu1'/>

        <label htmlFor="email" className='label1'>Email:</label>
        <input type="email" id="email" name="email" className='inpu1'/>

        <label htmlFor="message" className='label1'>Message:</label>
        <textarea id="message" name="message" className='inpu1'></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
