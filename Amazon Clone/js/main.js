function getItems() {
  db.collection("items")
    .get()
    .then((querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          image: doc.data().image,
          name: doc.data().name,
          make: doc.data().make,
          price: doc.data().price,
          rating: doc.data().rating,
        });
      });
      generateItems(items);
    });
}

function addToCart(item) {
    let cartIitem = db.collection("cart-items").doc(item.id);
    console.log(cartIitem);
  cartIitem.get().then((doc) => {
    //console.log(doc);
    if (doc.exists) {
      cartIitem.update({
        quantity: doc.data().quantity + 1,
      });
    } else {
      cartIitem.set({
        image: item.image,
        name: item.name,
        price: item.price,
        rating: item.rating,
        make: item.make,
        quantity: 1,
      });
    }
  });
}

function generateItems(items) {
  items.forEach((item) => {
    let doc = document.createElement("div");
    doc.classList.add("main-product", "mr-5", "mb-5");
    doc.innerHTML = `
        <div class="product-image w-48 h-52 bg-white roudned-lg p-4">
                                <img class="w-full h-full object-contain
                                " src=${item.image}>
                            </div>
                            <div class="product-name text-gray-700 font-bold mt-2 text-sm">
                                ${item.name}
                            </div>
                            <div class="product-make text-green-700 font-bold">
                                ${item.make}
                            </div>
                            <div class="product-rating text-yellow-300 font-bold my-1">
                                ⭐⭐⭐⭐⭐ ${item.rating}
                            </div>
                            <div class="product-price font-bold text-gray-700 text-lg">
                             ${numeral(item.price).format("$0,0.00")}
                            </div>
                             `;

    let addToCartEl = document.createElement("div");
    addToCartEl.classList.add(
      "rounded",
      "text-white",
      "flex",
      "items-center",
      "justify-center",
      "add-to-cart",
      "h-8-",
      "w-28",
      "bg-yellow-500",
      "text-md",
      "cursor-pointer",
      "hover:bg-yellow-600"
    );
    addToCartEl.innerText = "Add to Cart";
    addToCartEl.addEventListener("click", () => {
      addToCart(item);
    });
    doc.appendChild(addToCartEl);
    document.querySelector(".main-section-products").appendChild(doc);
  });
}
getItems();
