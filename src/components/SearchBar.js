import React, { useState } from "react";
import "../css/SearchBar.css";

export default function SearchBar({ searchcocktails, serachString }) {

  //search input value 
  const [searchInput, setSearchInput] = useState(serachString);

  /**
   * handle the search function through the props
   */
  const handleSearch = () => {
    searchcocktails(searchInput);
  };

  /**
   * handle the search input field
   * @param {*} e 
   */
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className="search-bar-container">
      <div className="search-box">
        <input
          placeholder="Search your cocktail.."
          onChange={handleSearchInput}
          value={searchInput}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}
