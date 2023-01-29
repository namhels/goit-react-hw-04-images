import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import { Image } from './ImageGalleryItem.Styled';

const ImageGalleryItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const { webformatURL, tags} = item;

  return (
    <>
      <Image
        src={webformatURL} alt={tags}
        onClick={openModal}
      />
      {isModalOpen &&
        <Modal
          item={item}
          onClose={closeModal} />
      }
    </>
  );
};

ImageGalleryItem.propTypes = {
  item:  PropTypes.shape({
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
}).isRequired};

export default ImageGalleryItem;