
const viewAccessories = () => {
    const data = accessories.map((item) => {
        const { img, name, desc, price } = item
        return `
                     <div class="card">
                       <h2>${name}</h2>
                        <div class='card-float'>
                            <div class="card-img">
                                <img src=${img} alt=${name}>
                            </div>
                            <div class='price-desc'>
                                <h3>Price : ${price}</h3>
                                <p>${desc}</p>
                            </div>
                         </div>
                         <hr/>
                     </div>
        `;
    }).join('')

    const containerElem = document.getElementById('access')
    const buttonElem = document.createElement("a");
     buttonElem.href = "bicyclopedia.html";
     buttonElem.innerHTML = `<button class="home rounded">Back to Home</button>`
    containerElem.innerHTML = data;
     containerElem.append(buttonElem);
}

viewAccessories()

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