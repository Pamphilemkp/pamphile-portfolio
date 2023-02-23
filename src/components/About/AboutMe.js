/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaGithub, FaTwitter, FaLinkedin, FaMedium, FaAngellist, FaWhatsapp,
} from 'react-icons/fa';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AboutMe() {
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
      className="about-contents"
      ref={ref}
      variants={contentsVariants}
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
    >
      <div className="let-connect">
        <img
          src="https://avatars.githubusercontent.com/u/98436409?v=4"
          aria-hidden
          alt="my online profile picture"
        />
        <p>
          {t('about.description')}
        </p>
      </div>
      <div className="languages">
        <h2>{t('about.spoken-languages-title')}</h2>
        <u className="languages-spoken-list">
          <li>
            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar value={90} text={`${90}%`} />
            </div>
            <span>{t('about.spoken-languages-list.en')}</span>
          </li>
          <li>
            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar value={95} text={`${95}%`} />
            </div>
            <span>{t('about.spoken-languages-list.fr')}</span>
          </li>
          <li>
            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar value={30} text={`${30}%`} />
            </div>
            <span>{t('about.spoken-languages-list.tr')}</span>
          </li>
          <li>
            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar value={85} text={`${85}%`} />
            </div>
            <span>{t('about.spoken-languages-list.swa')}</span>
          </li>
        </u>
      </div>
      <p className="paragrapgh">
        {t('about.last-description')}
      </p>
      <div className="connect">
        <h2 className="connect-title">{t('about.Let-connect')}</h2>
        <ul className="media-icons">
          <li>
            <a href="https://twitter.com/PamphileMusonda">
              <FaTwitter className="twitter" />
            </a>
          </li>

          <li>
            <a href="https://linkedin.com/in/pamphile-musonda">
              <FaLinkedin className="linkedin" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/+905338829657?text=Hello">
              <FaWhatsapp className="whatsapp" />
            </a>
          </li>

          <li>
            <a href="https://medium.com/@pamphilemkp">
              <FaMedium className="medium" />
            </a>
          </li>

          <li>
            <a href="https://github.com/pamphilemkp">
              <FaGithub className="github" />
            </a>
          </li>

          <li>
            <a href="https://angel.co/u/pamphile-musonda">
              <FaAngellist className="angelist" />
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default AboutMe;
