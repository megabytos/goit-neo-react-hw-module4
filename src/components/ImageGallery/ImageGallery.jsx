import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images, onModalOpen, scrollRef, imagesLoaded }) {
  if (images.length) {
    return (
      <ul className={css.gallery}>
        {images.map((image, index) => (
          <li key={image.id}>
            <ImageCard
              image={image}
              onModalOpen={onModalOpen}
              ref={index === images.length - imagesLoaded ? scrollRef : null}
            />
          </li>
        ))}
      </ul>
    );
  }
}
