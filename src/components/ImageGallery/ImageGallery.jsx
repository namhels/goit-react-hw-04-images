import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { Gallery, GalleryItem } from "./ImageGallery.Styled";


const ImageGallery = ({ items }) => {
  return (
    <Gallery>
      {items.map(item => (
        <GalleryItem key={item.id}>
          <ImageGalleryItem item={item} />
        </GalleryItem>
      ))}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,).isRequired,
};

export default ImageGallery;