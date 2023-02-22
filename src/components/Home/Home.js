import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-contents">
      <p className="first-paragrapgh">
        {t('home.great')}
        {' '}
        <span>{t('home.great-emoji')}</span>
      </p>
      <h1 className="title">
        {t('home.name.first')}
        {' '}
        <span className="mkp-span">
          {' '}
          {t('home.name.last')}
        </span>
        {' '}
        <br />
        {t('home.name.statement')}
      </h1>
      <p className="paragraph">
        {t('home.description')}
      </p>
      <Link to="/Contacts" className="get-in-touch">{t('home.in-touch-button')}</Link>
    </div>
  );
}

export default Home;
