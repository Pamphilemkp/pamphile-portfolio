/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactCountryFlag } from 'react-country-flag';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div className="select">
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="en" className="flag-container">
          <span className="flag-name">
            English
            {'   '}
          </span>
          <ReactCountryFlag countryCode="US" />
        </option>
        <option value="fr" className="flag-container">
          <span className="flag-name">
            Francais
            {'   '}
          </span>
          <ReactCountryFlag countryCode="FR" />
        </option>
        <option value="tr" className="flag-container">
          <span className="flag-name">
            Türkçe
            {'   '}
          </span>
          <ReactCountryFlag countryCode="TR" />
        </option>
      </select>
    </div>
  );
}
export default LanguageSwitcher;
