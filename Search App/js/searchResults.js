  export const deleteSearchResults = () => {
    const parentElement = document.getElementById('searchresults')
  let child = parentElement.lastElementChild
    while (child) {
      parentElement.removeChild(child)
      console.log(child);
      child = parentElement.lastElementChild
      
    }
}

/* const template = (data) => `
    <div id="job_edit" class="modal">
        <div class="modal-content">
            ${
              //we're just going to wrap an anonymous inline function here and then call it with some data
              ((job) => (job ? `<h4>Edit Job</h4>` : `<h4>Create Job</h4>`))(
                data.job
              ) //call the anonymous inline with the data we care about
            }
        </div>
    </div>
`;
 */
/* 
export const buildSearchResults = (resultArray) => {
  const element = resultArray.map((item) => {

    return `<div class="resultitem">
            <div class="resulttitle">
              <a href="https://en.wikipedia.org/?curid=${item.id}">${item.title}</a>
            </div>
            <div class="resultcontents">
            ${
              (() => {
                  if(item.image) {
                  return `<div class="resultimg">
                      <img src=${item.image} alt=${item.title}>
                  </div>`
                  } else {
                    return ''
                  }
              })()
          }
           <div class="resulttext">
              <p class="resultdesc">${item.text}</p>
            </div>
            </div>
          </div>
`
  }).join('')
  const searchResults = document.getElementById('searchresults')

  searchResults.innerHTML=element
}
 */
export const buildSearchResults = (resultArray) => {
  resultArray.forEach((result) => {
    const resultItem = createResultItem(result);
    const resultContents = document.createElement("div");
    resultContents.classList.add("resultcontents");
    if (result.img) {
      const resultImage = createResultImage(result);
      resultContents.append(resultImage);
    }
    const resultText = createResultText(result);
    resultContents.append(resultText);
    resultItem.append(resultContents);
    const searchResults = document.getElementById("searchresults");
    searchResults.append(resultItem);
    console.log(result);
  });
};

const createResultItem = (result) => {
  const resultItem = document.createElement("div");
  resultItem.classList.add("resultitem");
  const resultTitle = document.createElement("div");
  resultTitle.classList.add("resulttitle");
  const link = document.createElement("a");
  link.href = `https://en.wikipedia.org/?curid=${result.id}`;
  link.textContent = result.title;
  link.target='_blank'
  resultTitle.append(link);
  resultItem.append(resultTitle);
  return resultItem;
};

const createResultImage = (result) => {
  const resultImage = document.createElement("div");
  resultImage.classList.add("resultimg");
  const img = document.createElement("img");
  img.src = result.img;
  img.alt - result.title;
  resultImage.append(img);
  return resultImage;
};


const createResultText = (result) => {
    const resultText = document.createElement('div')
    resultText.classList.add('resulttext')
    const resultDescription = document.createElement('p')
    resultDescription.classList.add('resultdesc')
    resultDescription.textContent = result.text
    resultText.append(resultDescription)
    return resultText
}

export const clearStatLine = () => {
    const stat = document.getElementById('stats')
    stat.textContent=''
}

export const setStatsLine = (numberOfResults) => {
    const statLine = document.getElementById('stats')
    if (numberOfResults) {
        statLine.textContent=`Displaying ${numberOfResults} results`
    } else {
        statLine.textContent='Sorry, no results.'
    }
} 