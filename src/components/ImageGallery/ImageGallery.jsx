import PropTypes from "prop-types";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ photos }) => {
  return (
    <ul className={s.container}>
      {photos.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      urls: PropTypes.shape({ small: PropTypes.string.isRequired }).isRequired,
      alt_description: PropTypes.string,
    })
  ).isRequired,
};
export default ImageGallery;
