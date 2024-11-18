import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onOpenModal }) => {
  // console.log('images from app:', images);

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {images.map(img => (
          <li key={img.id} className={s.item}>
            <ImageCard img={img} onOpen={onOpenModal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGallery;
