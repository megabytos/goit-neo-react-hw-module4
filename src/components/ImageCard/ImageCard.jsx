import css from './ImageCard.module.css';
import { forwardRef } from 'react';

const ImageCard = forwardRef(({ image, onModalOpen }, ref) => {
  return (
    <div className={css.image} ref={ref} onClick={() => onModalOpen(image)}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
});

ImageCard.displayName = 'ImageCard';

export default ImageCard;
