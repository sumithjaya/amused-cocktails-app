import React from "react";
import "../css/CocktailCard.css";
import { FaHeart, FaRegHeart, FaTimesCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CocktailCard({
  drinkcode,
  image,
  cocktail,
  category,
  addButton = false,
  removeButton = false,
  viewCategory = false,
  handleAddButton,
  handleRemoveButton,
}) {
  return (
    <div className="cocktail-card">
      <div className="cocktail-card-body">
        <img src={image} alt="cocktail-image" />
        <h2>{cocktail}</h2>
        {removeButton && (
          <button
            className="btn-remove-favorites"
            onClick={() => handleRemoveButton(drinkcode)}
          >
            <IconContext.Provider value={{ color: "#d60602" }}>
              <FaTimesCircle />
            </IconContext.Provider>
            Remove
          </button>
        )}
        {addButton && (
          <button
            className="btn-addto-favorites"
            onClick={() => handleAddButton(drinkcode, image, cocktail)}
          >
            <IconContext.Provider value={{ color: "#d60602" }}>
              <FaHeart />
            </IconContext.Provider>
            Add
          </button>
        )}

        {viewCategory && <span className="category-badge">{category}</span>}
      </div>
    </div>
  );
}
