 import {
  setSearchFocus,
  showClearButton,
  clearSearchText,
  clearPushListener,
} from "./searchBar.js";
import {
  deleteSearchResults,
  buildSearchResults,
  clearStatLine,
  setStatsLine,
} from "./searchResults.js";
import { getSearchTerm, retrieveSearchResults } from "./dataFunction.js";

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

const initApp = () => {
  //! set d focus
  setSearchFocus();

  //TODO: 2 listeners clear text
  const searchInput = document.getElementById("search");
  searchInput.oninput = () => showClearButton();
  const clearElem = document.getElementById("clear");
  clearElem.onclick = () => clearSearchText();
    clearElem.onkeydown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            document.getElementById("clear").click();
          }
  };

  const formElem = document.getElementById("searchbar");
  formElem.addEventListener("submit", submitTheSearch);
};

//! Procedural 'workflow' fxn

const submitTheSearch = (event) => {
  event.preventDefault();
  deleteSearchResults();
  processTheSearch();
  setSearchFocus();
};

//! Procedural fxn
const processTheSearch = async () => {
  clearStatLine();
  const searchTerm = getSearchTerm();
  if (searchTerm === "") return;
  const resultArray = await retrieveSearchResults(searchTerm);

  if (resultArray.length) buildSearchResults(resultArray);

  setStatsLine(resultArray.length);
};



