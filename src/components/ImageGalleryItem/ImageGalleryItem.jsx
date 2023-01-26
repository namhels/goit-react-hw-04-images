import { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import { Image } from './ImageGalleryItem.Styled';


class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };


  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { item, item: {webformatURL, tags} } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        <Image
          src={webformatURL} alt={tags}
          onClick={this.openModal}
        />
        {isModalOpen &&
          <Modal
            item={item}
            onClose={this.closeModal} />
        }
      </>
    );
  };
};

ImageGalleryItem.propTypes = {
  item:  PropTypes.shape({
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
}).isRequired};

export default ImageGalleryItem;
