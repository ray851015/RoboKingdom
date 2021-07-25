import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="searchBox">
      <input
        className="searchBox__input"
        type="search"
        placeholder="type in robots name"
        onChange={searchChange}
      />
    </div>
  );
};
export default SearchBox;
