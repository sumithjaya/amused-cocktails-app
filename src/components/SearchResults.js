import React from "react";
import CocktailCard from "./CocktailCard";
import "../css/SearchResults.css";
import { FaFrown } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function SearchResults({
  searchdata,
  seractString,
  handleAddtoFavorites,
}) {

    /**
     * handle the add to favorites function through the props
     * @param {*} drinkcode 
     * @param {*} image 
     * @param {*} cocktail 
     */
  const handleAddButton = (drinkcode, image, cocktail) => {
    handleAddtoFavorites(drinkcode, image, cocktail);
  };
  return (
    <div className="search-results-block">
      <div className="search-results-header">
        <h2>Search Results</h2>
        <h4 data-testid="search-results-data">
          Displaying search {searchdata !== null ? searchdata.length : 0}{" "}
          results for <span>{seractString}</span>
        </h4>
      </div>
      <div className="search-results-content">
        {searchdata !== null ? (
        /**
         * Iterate through the search results
         */
          searchdata.map((result, index) => {
            return (
              <div key={index}>
                <CocktailCard
                  key={index}
                  drinkcode={result.idDrink}
                  image={result.strDrinkThumb}
                  cocktail={result.strDrink}
                  category={result.strCategory}
                  addButton={true}
                  handleAddButton={handleAddButton}
                />
              </div>
            );
          })
        ) : (
            /**
             * Display the No results found if results array is empty
             */
          <>
            <div className="empty-search-results-container">
              <IconContext.Provider value={{ color: "#FFF", size: "150px" }}>
                <FaFrown />
              </IconContext.Provider>
              <h1>Opps !</h1>
              <h2>No Results Found</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
