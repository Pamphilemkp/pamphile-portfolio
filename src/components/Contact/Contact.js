/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  FaMapMarkedAlt, FaWhatsapp, FaEnvelope, FaLinkedin,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm('xwkjvwje');
  if (state.succeeded) {
    return <p>Thanks for reaching out to me, i try will get back to you ASAP!</p>;
  }
  return (
    <div className="Contact-contents">
      <h2>
        {t('contact.title')}
        <span className="span-touch">{t('contact.title0')}</span>
      </h2>
      <div className="Contact-info">
        <div className="info-links">
          <div className="contact-link-container">
            <FaMapMarkedAlt />
            <a href="https://maps.app.goo.gl/WPWqKBo4etBGG4Wn7?g__st=ic">{t('contact.address')}</a>
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
            <input type="text" placeholder={t('contact.contact-details.name')} className="input" required />
            <ValidationError
              field="email"
              errors={state.errors}
            />
            <input type="email" placeholder={t('contact.contact-details.email')} name="email" className="input" required />
          </div>
          <textarea placeholder={t('contact.contact-details.message')} name="message" required />
          <ValidationError
            field="textarea"
            errors={state.errors}
          />
          <input type="submit" value={t('contact.contact-details.submit')} className="submit" disabled={state.submitting} />
        </form>
      </div>
    </div>
  );
}

export default Contact;
