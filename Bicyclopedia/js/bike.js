$(function () {
  let headerElem = $("header");
  let logo = $("#logo");
  let navMenu = $("#nav-menu");
  let navToggle = $("#nav-toggle");

  navToggle.on("click", () => {
    navMenu.css("right", "0");
  });

  $("#close-flyout").on("click", () => {
    navMenu.css("right", "-100%");
  });

  $(document).on("click", (e) => {
    let target = $(e.target);
    if (
      !(
        target.closest("#nav-toggle").length > 0 ||
        target.closest("#nav-menu").length > 0
      )
    ) {
      navMenu.css("right", "-100%");
    }
  });

  $(document).scroll(() => {
    let scrollTop = $(document).scrollTop();

    if (scrollTop > 0) {
      navMenu.addClass("is-sticky");
      logo.css("color", "#000");
      headerElem.css("background", "#fff");
      navToggle.css("border-color", "#000");
      navToggle.find(".strip").css("background-color", "#000");
    } else {
      navMenu.removeClass("is-sticky");
      logo.css("color", "#fff");
      headerElem.css("background", "transparent");
      navToggle.css("bordre-color", "#fff");
      navToggle.find(".strip").css("background-color", "#fff");
    }

    headerElem.css(
      scrollTop >= 200
        ? { padding: "0.5rem", "box-shadow": "0 -4px 10px 1px #999" }
        : { padding: "1rem 0", "box-shadow": "none" }
    );
  });

  $(document).trigger("scroll");
});

function ViewBikes() {
  const bikes = bicycles
    .map((item) => {
      const { img, price, desc, name } = item;
      return `
            <div class="bicycle">
              <h2 class="name">${name}</h2>
                  <div class="bike-img">
                      <img src=${img} alt=${name}>
                  </div>
                  <div class="bicycle-details">
                    <p class="price">Price : ${price}</p>
                    <p class='desc'>${desc}</p>
                  </div>
            </div>
    `;
    })
    .join("");

  const buttonElem = document.createElement("a");
  buttonElem.href = "index.html";
  buttonElem.innerHTML = `<button onclick="loadBikes()" class="home rounded">Back to Home</button>`;
  const bikeElem = document.querySelector("#bikes");
  console.log(bikeElem);
  bikeElem.innerHTML = bikes;
  bikeElem.append(buttonElem);
}
ViewBikes();
