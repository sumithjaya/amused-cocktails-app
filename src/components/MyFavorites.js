import React from "react";
import CocktailCard from "./CocktailCard";
import "../css/MyFavorites.css";
import { FaFrown } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function MyFavorites({ favoriteCocktailList, removeCocktail }) {

    /**
     * remove the cocktail entry from favorites list 
     * @param {*} id 
     */
  const handleRemoveButton = (id) => {
    removeCocktail(id);
  };
  return (
    <div className="favorites-container">
      <div className="favorites-header">
        <h2>My Favorites</h2>
        <h4 data-testid="favorite-results-data">
          Displaying{" "}
          {favoriteCocktailList !== null ? favoriteCocktailList.length : 0}{" "}
          favorite cocktails.
        </h4>
      </div>
      <div className="favorites-content">
        {favoriteCocktailList.length !== 0 ? (
          favoriteCocktailList.map((favorite, index) => {
            return (
              <CocktailCard
                key={index}
                drinkcode={favorite.id}
                image={favorite.image}
                cocktail={favorite.title}
                removeButton={true}
                handleRemoveButton={handleRemoveButton}
              />
            );
          })
        ) : (
          <>
            <div className="empty-favorite-results-container">
              <IconContext.Provider value={{ color: "#FFF", size: "150px" }}>
                <FaFrown />
              </IconContext.Provider>
              <h1>Opps !</h1>
              <h2>No Favorites Found</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
