import s from './ImageModal.module.css';
import PropTypes from 'prop-types';

// import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
// ТАК НЕ ВИЙШЛО:
// В customStyles  можна додати ще одне поле overlay з значенням backgroundColor
//  overlay: {
//   backgroundColor: "rgba(0,0,0, 0.5) ",
//  },
//спрацювало в index css class + !important

Modal.setAppElement('#root'); //прив'язка Modal до app

const ImageModal = ({ onClose, image }) => {
  //let subtitle;
  // function afterOpenModal() {
  //   //subtitle.style.color = '#f00';
  //   console.log('What?');
  // }

  return (
    <div>
      <Modal
        isOpen={true}
        //onAfterOpen={afterOpenModal}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={image.urls.regular} alt={image.alt_description} />
        <button onClick={onClose} className={s.closeBtn}>
          ×
        </button>
        <div className={s.descriptions}>
          <p>
            <span className={s.name}>Photo by:</span> {image.user.name}
          </p>
          <p>
            <span className={s.name}>likes:</span> {image.likes}
          </p>

          <ul></ul>
        </div>
      </Modal>
    </div>
  );
};

ImageModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
};

export default ImageModal;
