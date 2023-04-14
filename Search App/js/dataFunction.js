
export const getSearchTerm = () => {
  const rawSearchTerm = document.getElementById("search").value.trim();
  //* not more dan 2 spaces in d search term,only a space x allowed
  const regex = /[ ]{2,}/gi;
  const searchTerm = rawSearchTerm.replaceAll(regex, " ");
  return searchTerm;
};

export const retrieveSearchResults = async (searchTerm) => {
  const wikiSearchString = getWikiSearchString(searchTerm);
  const wikiSearchResult = await requestData(wikiSearchString);
  let resultArray = [];
  if (wikiSearchResult.hasOwnProperty("query")) {
    resultArray = processWikiResults(wikiSearchResult.query.pages);
  }
  return resultArray;
};

const getWikiSearchString = (searchTerm) => {
    //const proxy='https://cors-anywhere.herokuapp.com'
  const maxCharacters = getMaxCharacters();
  const rawURL = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${searchTerm}&gsrlimit=20&prop=pageimages|extracts&exchars=${maxCharacters}&exintro&explaintext&exlimit=max&format=json&origin=*`;
  const URL = encodeURI(rawURL);
  return URL;
};

const getMaxCharacters = () => {
  const width = window.innerWidth || document.body.clientWidth;
  let maxCharacters;
  if (width < 414) maxCharacters = 65;
  if (width >= 414 && width < 1400) maxCharacters = 100;
  if (width >= 1400) maxCharacters = 130;
  return maxCharacters;
};

const requestData = async (searchString) => {
  try {
    const response = await fetch(searchString);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

const processWikiResults = (results) => {
const resultArray = [];
  Object.keys(results).forEach((key) => {
    let id = key;
    let title = results[key].title;
    let text = results[key].extract;
    let img = results[key].hasOwnProperty("thumbnail")
      ? results[key].thumbnail.source
      : null;

    const item = {
      id: id,
      title: title,
      text: text,
      img: img,
    };
    resultArray.push(item);
  });
  
  return resultArray;
};
  