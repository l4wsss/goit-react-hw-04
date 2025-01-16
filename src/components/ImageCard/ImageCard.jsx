import PropTypes from "prop-types";
import s from "./ImageCard.module.css";
import { AiFillLike } from "react-icons/ai";

const ImageCard = ({ item, openModal }) => {
  return (
    <div onClick={() => openModal(item.urls.regular)} className={s.container}>
      <img src={item.urls.small} alt={item.alt_description || "Image"} />
      <span className={s.likes}>
        <AiFillLike />
        {item.likes}
      </span>
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
    likes: PropTypes.number.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageCard;
