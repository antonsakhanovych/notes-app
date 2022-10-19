import React from "react";
import { MdSearch } from "react-icons/md";

const Searchbar = ({ searchHandler }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        onChange={(event) => searchHandler(event.target.value)}
        type="text"
        placeholder="search the notes..."
      />
    </div>
  );
};

export default Searchbar;
