import Modal from "react-modal";
import s from "./ImageModal.module.css";
import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";

Modal.setAppElement("#root");

const ImageModal = ({ closeModal, isModalOpen, modalContent }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Photo Modal"
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          background: "#f0f0f0",
          padding: "0",
          borderRadius: "10px",
          border: "none",
        },
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
      }}
    >
      <div className={s.container}>
        <button onClick={closeModal} className={s.button}>
          <IoClose size="1.5em" />
        </button>
        <img src={modalContent} alt="Modal content" className={s.img} />
      </div>
    </Modal>
  );
};

ImageModal.propTypes = {
  closeModal: PropTypes.func,
  isModalOpen: PropTypes.bool,
  modalContent: PropTypes.string,
};

export default ImageModal;
