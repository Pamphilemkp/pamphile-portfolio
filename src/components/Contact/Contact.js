import React from 'react';
import {
  FaMapMarkedAlt, FaWhatsapp, FaEnvelope, FaLinkedin,
} from 'react-icons/fa';

function Contact() {
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
        <form className="form-items">
          <div className="fields">
            <input type="text" placeholder="Full-name" />
            <input type="email" placeholder="Email" />
          </div>
          <textarea placeholder="Message" />
          <input type="submit" value="Submit message" className="submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
