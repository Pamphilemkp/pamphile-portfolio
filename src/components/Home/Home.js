import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Home() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.2, // The element is considered "in view" when 20% of it is visible
    triggerOnce: true, // The animation should only trigger once
  });

  const contentsVariants = {
    initial: {
      opacity: 0,
      translateX: -50,
      translateY: -50,
    },
    animate: {
      opacity: 1,
      translateX: 0,
      translateY: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="home-contents"
      ref={ref}
      variants={contentsVariants}
      initial="initial"
      animate={inView ? "animate" : "initial"}
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

