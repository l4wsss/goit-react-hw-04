import PropTypes from "prop-types";

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <button onClick={handleLoadMore} type="button">
      Load more
    </button>
  );
};

LoadMoreBtn.propTypes = { handleLoadMore: PropTypes.func.isRequired };

export default LoadMoreBtn;
