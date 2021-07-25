import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input type="search"
       placeholder="type in robots name"
       onChange={searchChange}
       />
    </div>
  );
};
export default SearchBox;
