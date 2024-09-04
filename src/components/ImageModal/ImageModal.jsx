import css from './ImageModal.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function ImageModal({ modalData, onModalClose }) {
  console.log(modalData);
  return (
    <>
      <Modal
        isOpen={true}
        onRequestClose={onModalClose}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        contentLabel="Image Modal"
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <button className={css.close} onClick={onModalClose}>X</button>
        <img src={modalData.urls.regular} alt={modalData.alt_description} className={css.image} />
        <p className={css.description}>{modalData?.alt_description}</p>
      </Modal>
    </>
  );
}
