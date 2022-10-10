import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchResults from "../SearchResults";

describe(SearchResults, () => {
  it("Check search results title is rendering", () => {
    const data = [
      {
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/90etyl1504884699.jpg",
        strDrink: "Irish Cream",
        strCategory: "Cocktail",
      },
    ];
    render(<SearchResults searchdata={data} />);
    const textTitle = screen.getByText("Search Results");
    expect(textTitle).toBeInTheDocument();
  });

  it("Check search results count and search string render correct", () => {
    const resultCount = 1;
    const searchString = "Irish";
    const data = [
      {
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/90etyl1504884699.jpg",
        strDrink: "Irish Cream",
        strCategory: "Cocktail",
      },
    ];
    render(<SearchResults searchdata={data} seractString={searchString} />);
    const textResultDescription = screen.getByTestId("search-results-data");

    expect(textResultDescription.textContent).toContain(
      "Displaying search " + resultCount + " results for " + searchString
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
    render(<SearchResults searchdata={data} />);
    const textResultNull = screen.queryByText("No Results Found");
    expect(textResultNull).not.toBeInTheDocument();
  });
});
