import { useState } from "react";
import PropTypes from "prop-types";
import s from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import toast from "react-hot-toast";

const SearchBar = ({ onSearchChanged }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      return toast.error("Поле не може бути порожнім!");
    }
    onSearchChanged(value);
    console.log(value);
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className={s.input}
        />
        <button className={s.button}>
          <FaSearch size="1.7em" />
        </button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSearchChanged: PropTypes.func.isRequired,
};

export default SearchBar;
