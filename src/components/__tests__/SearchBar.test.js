import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "../SearchBar";

describe(SearchBar, () => {
  it("Check the search bar input element is rendering", () => {
    render(<SearchBar />);
    const textInput = screen.getByPlaceholderText("Search your cocktail..");
    expect(textInput).toBeInTheDocument();
  });

  it("Check the Search button is renderd in the Search Bar", () => {
    render(<SearchBar />);
    const btnSearch = screen.getByText("Search");
    expect(btnSearch).toBeInTheDocument();
  });

  it("Check the Search button click calls the handler function", () => {
    const handleSearch = jest.fn();
    render(<button onClick={handleSearch}>Search</button>);
    fireEvent.click(screen.queryByText("Search"));
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });
});
