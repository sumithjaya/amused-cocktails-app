import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyFavorites from "../MyFavorites";

describe(MyFavorites, () => {
  it("Check favorites title is rendering", () => {
    const data = [
      {
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/90etyl1504884699.jpg",
        strDrink: "Irish Cream",
        strCategory: "Cocktail",
      },
    ];

    render(<MyFavorites favoriteCocktailList={data} />);
    const textTitle = screen.getByText("My Favorites");
    expect(textTitle).toBeInTheDocument();
  });

  it("Check favorites entries are rendering", () => {
    const resultCount = 1;

    const data = [
      {
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/90etyl1504884699.jpg",
        strDrink: "Irish Cream",
        strCategory: "Cocktail",
      },
    ];
    render(<MyFavorites favoriteCocktailList={data} />);
    const textResultDescription = screen.getByTestId("favorite-results-data");

    expect(textResultDescription.textContent).toContain(
      "Displaying " + resultCount + " favorite cocktails."
    );
  });

  it("Check error message not rendering when results are available", () => {
    const data = [
      {
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/90etyl1504884699.jpg",
        strDrink: "Irish Cream",
        strCategory: "Cocktail",
      },
    ];
    render(<MyFavorites favoriteCocktailList={data} />);
    const textResultNull = screen.queryByText("No Results Found");
    expect(textResultNull).not.toBeInTheDocument();
  });
});
