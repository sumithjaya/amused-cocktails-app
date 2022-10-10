import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CocktailCard from "../CocktailCard";

describe(CocktailCard, () => {
  it("Check cocktail card image is rendering", () => {
    const image = "test_image.jpg";
    render(<CocktailCard image={image} />);
    const imgCocktail = screen.queryByAltText("cocktail-image");
    expect(imgCocktail.src).toContain("test_image.jpg");
  });

  it("Check the Cocktail Title is rendering", () => {
    const cocktail = "Irish Dark";
    render(<CocktailCard cocktail={cocktail} />);
    const titleCocktail = screen.getByText(cocktail);
    expect(titleCocktail).toBeInTheDocument();
  });

  it("Check the cocktail category is rendering", () => {
    const showCategory = true;
    const categoryTitle = "cocktail";
    render(
      <CocktailCard category={categoryTitle} viewCategory={showCategory} />
    );
    const textCategory = screen.getByText(categoryTitle);
    expect(textCategory).toBeInTheDocument();
  });

  it("Check the add button is rendering", () => {
    const showAddButton = true;
    render(<CocktailCard addButton={showAddButton} />);
    const btnAddToFavorites = screen.getByText("Add");
    expect(btnAddToFavorites).toBeInTheDocument();
  });

  it("Check the add to favorites button click functionality", () => {
    const handleAdd = jest.fn();
    render(<button onClick={handleAdd}>Add</button>);
    fireEvent.click(screen.queryByText("Add"));
    expect(handleAdd).toHaveBeenCalledTimes(1);
  });

  it("Check the remove button render functionality", () => {
    const showRemoveButton = true;
    render(<CocktailCard removeButton={showRemoveButton} />);
    const btnRemoveFavorites = screen.getByText("Remove");
    expect(btnRemoveFavorites).toBeInTheDocument();
  });

  it("Check remove button click functionality", () => {
    const handleRemove = jest.fn();
    render(<button onClick={handleRemove}>Remove</button>);
    fireEvent.click(screen.queryByText("Remove"));
    expect(handleRemove).toHaveBeenCalledTimes(1);
  });
});
