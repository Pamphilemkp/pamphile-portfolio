/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import Slider from 'react-slick';
import ProjectStore from './ProjectStore';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal from './Modal';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Project() {
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

  const sliderSettings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: false,
    draggable: true,
    speed: 700,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

  };

  const [isOpen, setOpen] = useState(false);
  const [itemId, setId] = useState(null);

  return (
    <motion.div
      className="about-contents"
      ref={ref}
      variants={contentsVariants}
      initial="initial"
      animate={inView ? 'animate' : 'initial'}
    >
      <div className="project-title">
        <h1>{t('projects.title')}</h1>
        <p>
          {t('projects.description')}
        </p>
      </div>
      <Slider {...sliderSettings}>
        {ProjectStore.map(({ id, title, photo }) => (
          <div key={id} onClick={() => { setId(id); setOpen(true); }} className="image-sliding-container">
            <img src={photo} alt={title} />
            <h2>{title}</h2>
          </div>
        ))}
      </Slider>
      <Modal
        open={isOpen}
        close={() => setOpen(false)}
        id={itemId}
      />
    </motion.div>
  );
}
export default Project;
