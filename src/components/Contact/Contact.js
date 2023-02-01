/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  FaMapMarkedAlt, FaWhatsapp, FaEnvelope, FaLinkedin,
} from 'react-icons/fa';

function Contact() {
  const [state, handleSubmit] = useForm('xwkjvwje');
  if (state.succeeded) {
    return <p>Thanks for reaching out to me, i try will get back to you ASAP!</p>;
  }
  return (
    <div className="Contact-contents">
      <h2>
        Get In
        <span className="span-touch">Touch</span>
      </h2>
      <div className="Contact-info">
        <div className="info-links">
          <div className="contact-link-container">
            <FaMapMarkedAlt />
            <a href="https://maps.app.goo.gl/WPWqKBo4etBGG4Wn7?g__st=ic">Yenikent street, Nicosia, North Cyprus</a>
          </div>
          <div className="contact-link-container">
            <FaWhatsapp className="whatsapp" />
            <a href="https://wa.me/+905338829657?text=Hello">+905338829657</a>
          </div>
          <div className="contact-link-container">
            <FaEnvelope />
            <a href="mailto:pamphilemkp@gmail.com">pamphilemkp@gmail.com</a>
          </div>
          <div className="contact-link-container">
            <FaLinkedin className="linkedin" />
            <a href="https://linkedin.com/in/pamphile-musonda">@pamphile-musonda</a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="form-items">
          <div className="fields">
            <ValidationError
              field="full-name"
              errors={state.errors}
            />
            <input type="text" placeholder="Enter Full-name" className="input" required />
            <ValidationError
              field="email"
              errors={state.errors}
            />
            <input type="email" placeholder="Enter Email" name="email" className="input" required />
          </div>
          <textarea placeholder="Enter Message" name="message" required />
          <ValidationError
            field="textarea"
            errors={state.errors}
          />
          <input type="submit" value="Submit message" className="submit" disabled={state.submitting} />
        </form>
      </div>
    </div>
  );
}

export default Contact;
