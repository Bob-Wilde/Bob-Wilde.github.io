const cartAmountElem = document.querySelector('.cartAmount')
const headerElem = document.querySelector("header");
const searchInputElem = document.querySelector(".search-box")
const navbarLiElem = document.querySelector(".navbar-li");
const menuIconElem = document.getElementById("menu-icon");
const searchIconElem = document.querySelector("#search-icon");
const userElem = document.querySelector(".user");
const userIconElem = document.getElementById("user-icon");
const scrollLinks= document.querySelectorAll(".scroll-link");
const sectionElems=document.querySelectorAll('.section')


document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
   loadCars();
   filterProduct("all");
   searchCar();
   calculation();
  }
});

function getLocalStorage() {
  return localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []
}

let cartBasket=getLocalStorage()

window.addEventListener("scroll", () => {
    headerElem.classList.toggle("shadow", scrollY > 0);
    searchInputElem.classList.remove("active");
  navbarLiElem.classList.remove('active')
  userElem.classList.remove('active')
});


searchIconElem.addEventListener("click", () => {
  searchInputElem.classList.toggle("active");
 
  userElem.classList.remove("active");
  navbarLiElem.classList.remove("active");
});


userIconElem.addEventListener("click", () => {
   navbarLiElem.classList.remove("active");
  userElem.classList.toggle("active");
  searchInputElem.classList.remove("active");
  
});

menuIconElem.addEventListener("click", () => {
  navbarLiElem.classList.toggle("active");
  userElem.classList.remove("active");
  searchInputElem.classList.remove("active");

});

//clicking on section removes active class from navbar links
scrollLinks.forEach((link) => {
  link.onclick=()=> {
    navbarLiElem.classList.remove('active')
  }
});

//scrolling to a section adds class of active to navbar links
window.onscroll = () => {
  sectionElems.forEach((section) => {
    let top = window.scrollY
    let offset = section.offsetTop - 150
    let height = section.offsetHeight
    let id = section.getAttribute('id')
    
    if (top >= offset && top < offset + height) {
      scrollLinks.forEach((link) => {
        link.classList.remove('active')
        const header = document.querySelector('.navbar .navbar-li a[href*=' + id + ']')
      //  console.log(header);
        header.classList.add('active')
        //console.log(link,header);
      })
    }
  })
}

const loadCars = () => {
  const data = CarData.map((car) => {
    const { price, properties, desc, img, reviews, name, brand, id } = car
    let search = cartBasket.find((item) => item.id === id)||[]
   // console.log(search.item);
    return `
      <div class="vehicle-container ${brand} hide">
      <div class="vehicle-img">
                        <img src=${img}>
                        </div>
                        <div class="vehicle-info">

                        <div class="name">
                            <h3>${name}</h3>
                        </div>
                        <div class="stars">
                            <div class="star">
                                ${reviews[0]}
                            </div>
                            <span>${reviews[1]}</span>
                        </div>
                        <div class="price">
                            <p class="term">price</p>
                            <p class="amount">$ ${price}</p>
                        </div>
                        
                        <div class="desc">
                            <p>
                            ${desc}
                            </p>
                            </div>
                            
                            <ul class="properties">
                            <li><span>Drivetrain </span> ${properties[0]}</li>
                            <li><span>Engine </span> ${properties[1]}</li>
                            <li><span>Horsepower </span> ${properties[2]}</li>
                            <li><span>Transmission </span> ${properties[3]}</li>
                        </ul>
                        
                        <div class="shopping-cart" onclick='addToCart(${id})' id='${id}'>
                      
                         ${search.item===undefined?`<i class='bx bxs-cart-alt'></i>`:`<h6 class='added'>Added to Cart</h6>`}
                        
                     
                        </div>
                        
                        </div>
                        </div>

    `
  }).join('')

  const vehicleWrapperElem = document.querySelector('.vehicle-wrapper')
  vehicleWrapperElem.innerHTML=data
  //console.log(data);
}


const filterProduct = (value) => {
  const btnElems=document.querySelectorAll('.brand-btn')
  btnElems.forEach((btn) => {
    if (value.toLowerCase()===btn.textContent.toLowerCase()) {
      btn.classList.add('active')
    } else {
      btn.classList.remove('active')
    }
  })
  
  const carCardElems = document.querySelectorAll('.vehicle-container')
  carCardElems.forEach((car) => {
    if (value==='all') {
    car.classList.remove('hide')
  } else if (car.classList.contains(value)) {
    car.classList.remove('hide')
  } else {
    car.classList.add('hide')
  }
})
}



const searchCar = () => {
  const allCarNames = document.querySelectorAll('.vehicle-container h3')
  const cars=document.querySelectorAll('.vehicle-container')
  searchInputElem.addEventListener('keyup', (e) => {
    const value = e.target.value.toLowerCase()
    allCarNames.forEach((carName,index) => {
      if (carName.textContent.toLowerCase().includes(value)) {
        cars[index].classList.remove('hide')
      } else {
        cars[index].classList.add('hide')
  }
})
})
}



const addToCart = (id) => {
  const selectedItem = id
  //console.log(id);
  const search=cartBasket.find((item)=>item.id===selectedItem.id)
  if (!search) {
    cartBasket.push({
      id: selectedItem.id,
      item:1
    })
  } 
  update(selectedItem.id)
  calculation()
  const element = document.getElementById(selectedItem.id)
  element.innerHTML=`<h6 class='added'>Added to Cart</h6>`
  setLocalStorage()
}

const setLocalStorage = () => {
  return localStorage.setItem('data',JSON.stringify(cartBasket))
}

//console.log(cartBasket);  

const update = (id) => {
  const selectedItem = id
  const search = cartBasket.find((item) => item.id === selectedItem)
  cartAmountElem.innerText = search.item
  calculation()
}

//console.log(cartBasket);

const calculation = () => {
  const items = cartBasket.map((number) => number.item)
  const add = items.reduce((x, y) => x + y, 0)
  cartAmountElem.innerHTML = add
}
