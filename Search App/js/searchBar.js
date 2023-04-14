  export const setSearchFocus = () => {
  document.getElementById("search").focus();
 
};

export const showClearButton = () => {
  const searchInput = document.getElementById("search");
  const clearElem = document.getElementById("clear");
  if (searchInput.value.length) {
    clearElem.classList.remove("none");
    clearElem.classList.add("flex");
  } else {
    clearElem.classList.add("none");
    clearElem.classList.remove("flex");
  }
};

export const clearSearchText = () => {
  document.getElementById("search").value = "";
  const clearElem = document.getElementById("clear");
  clearElem.classList.add("none");
  clearElem.classList.remove("flex");
  setSearchFocus();
};

export const clearPushListener = (e) => {
  if (e.key === "Enter" || e.key === " ") {
    event.preventDefault();
    document.getElementById("clear").click();
  }
};
  