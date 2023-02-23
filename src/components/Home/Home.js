import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function Home() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="home-contents"
      initial={{
        opacity: 0,
        translateX: -50,
        translateY: -50,
      }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
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
    </motion.div>
  );
}

export default Home;
