function getCartItems() {
  db.collection("cart-items").onSnapshot((snapshot) => {
    let cartIitems = [];
    snapshot.docs.forEach((doc) => {
      cartIitems.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    generateCartItems(cartIitems);
    getTotalCost(cartIitems);
  });
}

function getTotalCost(items) {
  let totalCost = 0;
  items.forEach((item) => {
    totalCost += item.price * item.quantity;
  });
  document.querySelector(".total-cost-number").innerText =
    numeral(totalCost).format("$0,0.00");
}

function decreaseCount(itemID) {
  let cartIitem = db.collection("cart-items").doc(itemID);
  cartIitem.get().then((doc) => {
    if (doc.exists) {
      if (doc.data().quantity > 1) {
        cartIitem.update({
          quantity: doc.data().quantity - 1,
        });
      }
    }
  });
}

function increaseCount(itemID) {
  let cartIitem = db.collection("cart-items").doc(itemID);
  cartIitem.get().then((doc) => {
    if (doc.exists) {
      if (doc.data().quantity > 0) {
        cartIitem.update({
          quantity: doc.data().quantity + 1,
        });
      }
    }
  });
}

function deleteItem(itemID) {
  db.collection("cart-items").doc(itemID).delete();
}

function generateCartItems(cartIitems) {
  let itemsHTML = "";
  cartIitems.forEach((item) => {
    itemsHTML += `
            <div class="cart-item flex items-center pb-4 border-b border-gray-100">
                        <div class="cart-item-image w-48 h-24 bg-white p-4 rounded-lg">
                            <img class="w-full h-full object-contain"
                                src=${item.image}
                                alt="">
                        </div>
                        <div class="cart-item-details flex-grow">
                            <div class="cart-item-title font-bold text-sm text-gray-600">
                                ${item.name}
                            </div>
                            <div class="cart-item-brand text-sm text-gray-400">
                                ${item.make}
                            </div>
                        </div>
                        <div class="cart-item-counter w-48 flex items-center gap-2">
                            <div data-id=${item.id}
                                class="cart-item-decrease cursor-pointer text-gray-400 bg-gray-100 rounded h-6 w-6 flex justify-center items-center hover:bg-gray-200">
                                <i class="fa-solid fa-chevron-left fa-xs"></i>
                            </div>
                            <h4 class="text-gray-400">x${item.quantity}</h4>
                            <div data-id=${item.id}
                                class="cart-item-increase cursor-pointer text-gray-400 bg-gray-100 rounded h-6 w-6 flex justify-center items-center hover:bg-gray-200">
                                <i class="fa-solid fa-chevron-right fa-xs"></i>
                            </div>
                        </div>
                        <div class="cart-item-total-cost font-bold w-48 text-gray-400">
                         ${numeral(item.price * item.quantity).format(
                          "$0,0.00"
                        )}
                        </div>
                        <div data-id=${
                          item.id
                        } class="cart-item-delete w-10 font-bold text-gray-300 cursor-pointer hover:text-gray-400">
                            <i class="fas fa-times"></i>
                        </div>
                    </div>
    
      `;
  });
  document.querySelector(".cart-items").innerHTML = itemsHTML;
  createEventListeners();
}

function createEventListeners() {
  let decreaseButtons = document.querySelectorAll(".cart-item-decrease");
  let increaseButtons = document.querySelectorAll(".cart-item-increase");
  let deleteButttons = document.querySelectorAll(".cart-item-delete");

  decreaseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      decreaseCount(button.dataset.id);
    });
  });

  increaseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      increaseCount(button.dataset.id);
    });
  });

  deleteButttons.forEach((button) => {
    button.addEventListener("click", () => {
      deleteItem(button.dataset.id);
    });
  });
}
getCartItems();
