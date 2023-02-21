import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFlag } from 'react-icons/fa';

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
          <FaFlag style={{ color: 'red', backgroundColor: 'white' }} />
        </option>
        <option value="fr">Francais</option>
        <option value="tr">Türkçe</option>
      </select>
    </div>
  );
}
export default LanguageSwitcher;
