import PropTypes from "prop-types";

const ImageCard = ({ item }) => {
  return (
    <div>
      <img src={item.urls.small} alt={item.alt_description || "Image"} />
    </div>
  );
};

ImageCard.propTypes = {
  item: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
  }).isRequired,
};

export default ImageCard;
