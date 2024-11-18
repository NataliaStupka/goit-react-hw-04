import s from './ImageCard.module.css';

const ImageCard = ({ img, onOpen }) => {
  // для модалки
  const handleClickImg = () => {
    onOpen(img);
  };

  return (
    <div>
      <img
        src={img.urls.small}
        alt={img.alt_description}
        className={s.img}
        onClick={handleClickImg}
      />
    </div>
  );
};

export default ImageCard;
