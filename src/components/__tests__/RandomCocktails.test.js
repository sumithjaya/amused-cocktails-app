import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RandomCocktails from "../RandomCocktails";

describe(RandomCocktails, () => {
  it("Check the title is rendered in the random cocktails component", () => {
    const data = [
      {
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/90etyl1504884699.jpg",
        strDrink: "Irish Cream",
        strCategory: "Cocktail",
      },
    ];
    render(<RandomCocktails randomCocktails={data} />);
    const textTitle = screen.getByText("Random Cocktails");
    expect(textTitle).toBeInTheDocument();
  });

  it("Check the refresh button is rendered in the Random cocktails content area", () => {
    const data = [
      {
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/90etyl1504884699.jpg",
        strDrink: "Irish Cream",
        strCategory: "Cocktail",
      },
    ];
    render(<RandomCocktails randomCocktails={data} />);
    const btnRefresh = screen.getByText("Refresh");
    expect(btnRefresh).toBeInTheDocument();
  });

  it("Check the Refresh button click calls the handler function", () => {
    const handleRefresh = jest.fn();
    render(<button onClick={handleRefresh}>Refresh</button>);
    fireEvent.click(screen.queryByText("Refresh"));
    expect(handleRefresh).toHaveBeenCalledTimes(1);
  });
});
