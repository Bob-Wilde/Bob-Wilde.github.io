document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
   homePage();
   getMovies(APIURL);
   comingMovies();
  }
});

const headerElem = document.querySelector("header");

const menuIconElem = document.getElementById("menu-icon");

const navbarElem = document.querySelector(".navbar");

menuIconElem.addEventListener("click", () => {
  navbarElem.classList.toggle("active");
  menuIconElem.classList.toggle("bx-x");
});

window.onscroll = () => {
  navbarElem.classList.remove("active");
  menuIconElem.classList.remove("bx-x");
};

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  if (scroll > 0) {
    headerElem.classList.add("shadow");
    navbarElem.classList.remove("active");
    menuIconElem.classList.remove("bx-x");
  } else {
    headerElem.classList.remove("shadow");
  }
});

var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function homePage() {
  const data = homepage
    .map((item) => {
      const { name, img, link } = item;
      return `
             <div class="swiper-slide container">
                <img src=${img}>
                <div class="home-text">
                    <span>Marvel Universe</span>
                    <h1>${name[0]}: ${name[1]} <br> ${name[2]}</h1>
                    <a href=${link} target="_blank" class="btn">Watch Trailer</a>
                </div>
            </div>
        `;
    })
    .join("");

  const swiperElem = document.querySelector(".swiper-wrapper");
  swiperElem.innerHTML = data;
}



const random = Math.ceil(Math.random() * 100);
const APIURL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${random}`;

const IMGPATH = "https://image.tmdb.org/t/p/w1280/";

const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const moviesContainerElem = document.querySelector(".movies-container");

const formElem = document.querySelector("#form");

const searchElem = document.getElementById("search");

const getMovies = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const movies = data.results;
  // console.log(movies.length);

  showMovies(movies);
  displayResults(movies.length);
};



function showMovies(movies) {
  const statsline = document.querySelector("#movies .statsline");
  statsline.innerHTML = "";
  moviesContainerElem.innerHTML = "";
  movies.forEach((movie) => {
    const { poster_path, title, vote_average, overview } = movie;
    const movieElem = document.createElement("div");
    movieElem.classList.add("movie");
    movieElem.innerHTML = `
    
    <img src="${IMGPATH + poster_path}" alt="${title}">
    <div class="movie-info">
    <h3>${title}</h3>
                    <span class='${getClassByRate(
                      vote_average
                    )}'>${vote_average}</span>
                </div>

                <div class='overview'>
                <h4>Overview:</h4>
                ${overview}</div>
    
                `;

    moviesContainerElem.appendChild(movieElem);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

formElem.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = searchElem.value.trim();

  if (searchTerm) {
    getMovies(SEARCHAPI + searchTerm);
    searchElem.value = "";
  }
});

const displayResults = (results) => {
  const statsline = document.querySelector("#movies .statsline");
  //console.log(statsline);
  if (results === 0) {
    statsline.innerHTML = `
    <h3 class='no-results'>Sorry, no movies found☹️, Try again...</h3>  `;
  }
};

const comingMovies = () => {
  const data = comingMoviesData
    .map((item) => {
      const { img, title, cateory, rating } = item;
      return `
    <div class="swiper-slide">
                  <div class="main-slider-box">
                  <div class="main-slider-img">
                          <img src=${img}>
                          </div>
                      <div class="main-slider-text">
                          <div class="bottom-text">
                          <div class="movie-name">
                                  <strong>${title[0]}: ${title[1]}</strong>
                              </div>
                              <div class="category-rating">
                                  <div class="category">
                                  <a href="#">${cateory[0]}</a>,
                                        <a href="#">${cateory[1]}</a>,
                                        <a href="#">${cateory[2]}</a>
                                        </div>
                                        <div class="rating">
                                        ${rating} <img src="/Images/IMDb-icon.png" alt="imbd">
                                    </div>
                                </div>
                          </div>
                        </div>
                      </div>
                   </div>
    `;
    })
    .join("");

  const swiperElem = document.querySelector("#coming .swiper-wrapper");
  swiperElem.innerHTML = data;
  console.log(swiperElem);
};


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

let scrollPercentage = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  scrollProgress.style.background = `conic-gradient(#1855fc ${scrollValue}%, #2b2f38 ${scrollValue}%)`;
};
window.onscroll = scrollPercentage;
window.onload = scrollPercentage;
