/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import ProjectStore from './ProjectStore';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PopUp from './PopUp';

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

  return (
    <div className="project-contents">
      <Slider {...sliderSettings}>
        {ProjectStore.map(({ id, title, photo }) => (
          <div key={id} onClick={<PopUp />}>
            <img src={photo} alt={title} />
            <p>{title}</p>
          </div>
        ))}
        {/* <ul>{dots}</ul> */}
      </Slider>
    </div>
  );
}
export default Project;