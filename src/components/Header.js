import React from "react";
import "../css/Header.css";
import { FaHeart } from "react-icons/fa";
import { IconContext } from "react-icons";
import CocktailIcon from "../cocktailIcon.svg";

export default function Header({ displayFavorites, backToHome }) {
  return (
    <div className="header-container">
      <div className="header-title" onClick={() => backToHome()}>
        <img alt="logoImage" src={CocktailIcon} />
        <h1>Amused Cocktails</h1>
      </div>
      <div className="header-favorites">
        <div className="btn-my-favorites">
          <IconContext.Provider value={{ color: "#d60602" }}>
            <button onClick={(evt) => displayFavorites()}>
              {" "}
              <FaHeart />
              My Favorites
            </button>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
