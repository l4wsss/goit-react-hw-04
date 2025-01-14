import { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearchChanged }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchChanged(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSearchChanged: PropTypes.func.isRequired,
};

export default SearchBar;
