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

function Project() {
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
    <div className="project-contents">
      <div className="project title">
        <h1>Projects</h1>
        <p>
          Here are a few of my projects some are deployed
          you can see the live and the source but order are still under deployment
          only the source of the project are visible but all the projects will be
          soon deployed
          {' '}

        </p>
      </div>
      <Slider {...sliderSettings}>
        {ProjectStore.map(({ id, title, photo }) => (
          <div key={id} onClick={() => { setId(id); setOpen(true); }}>
            <img src={photo} alt={title} />
            <p>{title}</p>
          </div>
        ))}
        {/* <ul>{dots}</ul> */}
      </Slider>
      <Modal open={isOpen} close={() => setOpen(false)} id={itemId} />
    </div>
  );
}
export default Project;
