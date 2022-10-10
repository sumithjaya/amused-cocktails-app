import React, { useEffect, useState } from "react";
import "../css/Home.css";
import { FaHeart, FaTrash } from "react-icons/fa";
import axios from "axios";
import SearchResults from "../components/SearchResults";
import RandomCocktails from "../components/RandomCocktails";
import Header from "../components/Header";
import MyFavorites from "../components/MyFavorites";
import SearchBar from "../components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Home() {

  /**
   * Intiate the values using useState hook
   */

  //The max random entries count is set to 5 as default
  const [maxRandomEntries, setMaxRandomEntries] = useState(5);
  const [randomCocktails, setRandomCocktails] = useState([]);
  const [viewRandomResults, setViewRandomResults] = useState(true);
  const [viewSearchResults, setViewSearchResults] = useState(false);
  const [viewFavoritesResults, setViewFavoritesResults] = useState(false);
  const [serachString, setSearchString] = useState("");
  const [cocktailsSearchResults, setCocktailsSearchResults] = useState([]);
  const [favoriteCocktailList, setFavoriteCocktailList] = useState([]);

  /**
   * Get Random Cocktails from the API function
   */
  const getRandomCocktailFromAPI = () => {
    getrandomCocktail(maxRandomEntries).then((res) => {
      setRandomCocktails(res);
    });
  };

  /**
   * Get Random entries API call async function
   * @param {*} maxEntries 
   * @returns 
   */
  const getrandomCocktail = async (maxEntries) => {
    let resultArray = [];
    try {
      //get random entries maxEntries times in for loop
      for (var i = 0; i < maxEntries; i++) {
        await axios
          .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
          .then((res) => {
            resultArray = [...resultArray, res.data.drinks[0]];
          });
      }
    } catch (error) {
      console.log(error);
    }


    return resultArray;
  };

  /**
   * use effect hook call the random cocktail API calls on home page rendering
   */
  useEffect(() => {
    getRandomCocktailFromAPI();
  }, []);

  /**
   * Handle the Refresh button and reset the random cocktails array
   */
  const handleRefresh = () => {
    getRandomCocktailFromAPI();
  };


  /**
   * Search for cocktails in the API using the provided search string
   * @param {*} searchString 
   */
  const searchcocktails = (searchString) => {
    try {
      axios
        .get(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
            searchString
        )
        .then((res) => {
          setCocktailsSearchResults(res.data.drinks);
          setViewSearchResults(true);
          setViewRandomResults(false);
          setViewFavoritesResults(false);
          setSearchString(searchString);
        });
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Add the Cocktails to my favorites list
   * @param {*} drinkcode 
   * @param {*} image 
   * @param {*} cocktail 
   */
  const handleAddtoFavorites = async (drinkcode, image, cocktail) => {
    await setFavoriteCocktailList([
      ...favoriteCocktailList,
      {
        id: drinkcode,
        image: image,
        title: cocktail,
      },
    ]);

    //display the successful toaster with red style (.error used for UI perpose)
    toast.error(cocktail + " added to the My Favorites successfully !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      icon: FaHeart,
    });
  };

  /**
   *Display the my favorites view with available favorites entries
   */
  const displayFavorites = () => {
    setSearchString("");
    setViewSearchResults(false);
    setViewRandomResults(false);
    setViewFavoritesResults(true);
  };

  /**
   * Remove the cocktails from my favorites list
   * @param {*} id 
   */
  const removeCocktail = (id) => {
    setFavoriteCocktailList(
      favoriteCocktailList.filter((favorite) => favorite.id != id)
    );
    //display the entry removed toaster with red style (.error used for UI perpose)
    toast.error("Cocktail removed from favorites !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      icon: FaTrash,
    });
  };

  /**
   * Back to home function when click on the logo or title of the webpage
   */
  const backToHome = () => {
    //re read the random cocktail entries for home page
    getRandomCocktailFromAPI();
    //display home page and disable other views
    setViewSearchResults(false);
    setViewRandomResults(true);
    setViewFavoritesResults(false);
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header displayFavorites={displayFavorites} backToHome={backToHome} />
      <SearchBar
        searchcocktails={searchcocktails}
        serachString={serachString}
      />
      {viewRandomResults && (
        <div className="home-content">
          <RandomCocktails
            randomCocktails={randomCocktails}
            handleRefresh={handleRefresh}
          />
        </div>
      )}
      {viewSearchResults && (
        <SearchResults
          searchdata={cocktailsSearchResults}
          seractString={serachString}
          handleAddtoFavorites={handleAddtoFavorites}
        />
      )}

      {viewFavoritesResults && (
        <MyFavorites
          favoriteCocktailList={favoriteCocktailList}
          removeCocktail={removeCocktail}
        />
      )}
    </>
  );
}
