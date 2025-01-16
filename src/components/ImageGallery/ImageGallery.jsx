import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul className={s.container}>
      {photos.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};
export default ImageGallery;
