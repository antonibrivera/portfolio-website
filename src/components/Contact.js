import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact(props) {

  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)
  
  const sendEmail = (ev) => {
    ev.preventDefault()
    emailjs.sendForm('default_service', 'portfolio_website_form', ev.target, 'user_7G223VOSXAmPHJBHhguYW')
      .then(function(response) {
        setSuccess('Thank you for submitting your message! I\'ll be in contact with you shortly.')
        ev.target.user_name.value = ''
        ev.target.user_email.value = ''
        ev.target.message.value = ''
      }, function(error) {
        setError('Sorry something went wrong. Try again!')
      });
  }

  return (
    <section className="content-section">
      <header className="contact-header">
        <h1 className="contact-title">Let's get in touch!</h1>
        <p className="contact-subtitle">Click <a href="mailto:antonibrivera@gmail.com" target="_blank" rel="noopener noreferrer">antonibrivera@gmail.com</a> to email me with your preferred email client or send me an email below! I look forward to working with you soon.</p>
      </header>
      <form className="contact-form" onSubmit={(ev) => sendEmail(ev)}>
        <legend>Contact Me</legend>
        <label htmlFor="full-name">Full Name</label>
        <input type="text" id="full-name" name="user_name" placeholder="Enter first and last name..." required />
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="user_email" placeholder="Enter email address..." required />
        <label htmlFor="message">Type your message</label>
        <textarea id="message" name="message" cols="30" rows="10" style={{resize: 'none'}} placeholder="Enter a brief message..." required ></textarea>
        <button type="submit">Send Message</button>
      </form>
      { success && <p className="contact-success">{success}</p>}
      { error && <p className="contact-error">{error}</p>}
    </section>
  )
}