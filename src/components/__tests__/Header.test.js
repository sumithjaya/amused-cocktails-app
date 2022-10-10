import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";

describe(Header, () => {
  it("Check the Site Title is displaying in the header", () => {
    render(<Header />);
    const titleElement = screen.getByText("Amused Cocktails");
    expect(titleElement).toBeInTheDocument();
  });

  it("Check the logo svg is rendering in the header", () => {
    render(<Header />);
    const titleLogo = screen.queryByAltText("logoImage");
    expect(titleLogo.src).toContain("cocktailIcon");
  });

  it("Check the my favorites button is rendering the in the Header", () => {
    render(<Header />);
    const btnMyFavorites = screen.getByText("My Favorites");
    expect(btnMyFavorites).toBeInTheDocument();
  });

  it("Check the Search button click calls the handler function", () => {
    const handleMyFavorites = jest.fn();
    render(<button onClick={handleMyFavorites}>My Favorites</button>);
    fireEvent.click(screen.queryByText("My Favorites"));
    expect(handleMyFavorites).toHaveBeenCalledTimes(1);
  });
});
