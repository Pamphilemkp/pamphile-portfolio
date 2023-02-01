/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import ReactDOM from 'react-dom';
import { FaGithub, FaPowerOff } from 'react-icons/fa';
import { GoX } from 'react-icons/go';
import ProjectStore from './ProjectStore';

function Modal({ open, id, close }) {
  const ids = { id };
  const numId = ids.id;
  const item = (id !== null) ? ProjectStore[numId] : 100;
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="popup-container">
      <div className="popup-contents">
        <p onClick={close} className="close-icon">
          {' '}
          <GoX />
        </p>
        <div className="popup-items">
          <img src={item.photo} alt={item.title} />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <h3>built with</h3>
          <ul>
            {item.language.map((tool) => (
              <li key={item.id}>{tool}</li>
            ))}
          </ul>
          <div className="source-live">
            <a href={item.source}>
              See source
              {' '}
              <span className="source-icon"><FaGithub /></span>
            </a>
            <a href={item.live}>
              See live
              <span className="live-icon"><FaPowerOff /></span>
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal'),
  );
}

export default Modal;
