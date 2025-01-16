import PropTypes from "prop-types";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <div className={s.container}>
      <button onClick={handleLoadMore} type="button" className={s.button}>
        Load more
      </button>
    </div>
  );
};

LoadMoreBtn.propTypes = { handleLoadMore: PropTypes.func.isRequired };

export default LoadMoreBtn;
