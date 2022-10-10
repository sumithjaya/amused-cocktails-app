import React from "react";
import { IconContext } from "react-icons";
import { FaSyncAlt } from "react-icons/fa";
import "../css/RandomCocktails.css";
import CocktailCard from "./CocktailCard";

export default function RandomCocktails({ randomCocktails, handleRefresh }) {
  return (
    <>
      <div className="random-content-block">
        <div className="random-content-header">
          <h2>Random Cocktails</h2>
          <button onClick={handleRefresh}>
            {" "}
            <IconContext.Provider value={{ color: "#fff" }}>
              <FaSyncAlt />
            </IconContext.Provider>
            Refresh
          </button>
        </div>

        <div className="random-content-images">
          {randomCocktails.length !== 0 &&
            randomCocktails.map((item, index) => {
              return (
                <CocktailCard
                  key={index}
                  image={item.strDrinkThumb}
                  cocktail={item.strDrink}
                  category={item.strCategory}
                  viewCategory={true}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
