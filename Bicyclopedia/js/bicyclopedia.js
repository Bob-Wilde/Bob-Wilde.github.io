document.addEventListener("DOMContentLoaded", loadBikes);
const sliderElem = document.getElementById("bicycles-slider");

function loadBikes() {
  sliderElem.innerHTML = bicycles
    .map((item) => {
      const { img, price, recommendation, name } = item;
      return `
              <div class="bicycle">
                    <div class="bike-img">
                        <img src=${img} alt="${name}">
                    </div>
                    <div class="bicycle-details">
                        <p class="price">${price}</p>
                        <span class="name">${name}</span>
                        <span class="recom">${recommendation}</span>
                    </div>
                </div>
    `;
    })
    .join("");
  const buttonElem = document.createElement("a");
  buttonElem.href = "bicycles.html";
  const containerElem = document.querySelector("#bicycles .container");
  //console.log(sliderElem);
  buttonElem.innerHTML = `<button id='view' class="rounded">View All Bicycles</button>`;
  //const viewAll = document.getElementById("view");
  containerElem.appendChild(buttonElem);
}

const loadAccessories = () => {
  const data = Object.values(accessories)
  //console.log(data);

  let cardString ='';
  for (let i = 0; i < 3; i++) {
    const {img,name,recommendation,price}=data[i]
    cardString += `
               <div class="card">
                  <div class="card-img">
                     <img src=${img} alt=${name}>
                  </div>
                  <div class='name-price'>
                  <h3>${name}</h3>
                  <p>${price}</p>
                  </div>
                  <p>${recommendation}</p>
                </div>`;
  }
  const flexCoElem = document.querySelector('.flex.accessories')
  const containerElem=document.querySelector('.container.accessories')
  const buttonElem = document.createElement("a");
  buttonElem.href = "accessories.html";
  flexCoElem.innerHTML = cardString
  buttonElem.innerHTML = `<button id='view' class="rounded">View All Accessories</button>`;
  containerElem.appendChild(buttonElem)
}
loadAccessories()