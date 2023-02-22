/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CountryFlag } from 'react-country-flag';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div className="select">
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="en">
          English
          <CountryFlag countryCode="US" />
        </option>
        <option value="fr">
          Francais
          <CountryFlag countryCode="FR" />
        </option>
        <option value="tr">
          Türkçe
          <CountryFlag countryCode="TR" />
        </option>
      </select>
    </div>
  );
}
export default LanguageSwitcher;
