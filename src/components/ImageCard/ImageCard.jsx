import PropTypes from "prop-types";

const ImageCard = ({ item, openModal }) => {
  return (
    <div onClick={() => openModal(item.urls.regular)}>
      <img src={item.urls.small} alt={item.alt_description || "Image"} />
    </div>
  );
};

ImageCard.propTypes = {
  item: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
      regular: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageCard;
