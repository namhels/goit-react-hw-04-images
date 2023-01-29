import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Img, ModalStyled, Overlay } from './Modal.Styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ item, onClose }) => {

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  function handleKeyDown (e) {
    if (e.code === 'Escape') {
      onClose();
    };
  };

  function handleBackdropClick (event) {
    if (event.target.tagName !== 'IMG') {
      onClose();
    };
  };

  const {largeImageURL, tags} = item;

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalStyled>
        <Img src={largeImageURL} alt={tags} />
      </ModalStyled>
    </Overlay>,
    modalRoot,
  );
};

Modal.propTypes = {
  item:  PropTypes.shape({
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;

