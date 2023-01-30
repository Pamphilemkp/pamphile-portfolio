/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import ReactDOM from 'react-dom';
import ProjectStore from './ProjectStore';

function Modal({ open, id, close }) {
  const ids = { id };
  const numId = ids.id;
  const item = (id !== null) ? ProjectStore[numId] : 100;
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="popup-container">
      <div className="popup-contents">
        <p onClick={close}>X</p>
        <div className="popup-items">
          <p>{item.title}</p>
          <p>{id}</p>
        </div>
      </div>
    </div>,
    document.getElementById('portal'),
  );
}

export default Modal;
