const getUID = (item) => {
  return item.product._id + item.color;
}

// display all the items that we previously get form the local storage
const displayItems = (items) => {

  // loop in each item dor dynamic display
  items.forEach(item => {

    // modify DOM element to create an item card
    const itemToDisplay = `<article class="cart__item" id="${getUID(item)}">
      <div class="cart__item__img">
        <img src="${item.product.imageUrl}" alt="${item.product.altText}">
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__description">
          <h2>${item.product.name}</h2>
          <p>${item.color}</p>
          <p>${item.product.price} €</p>
        </div>
        <div class="cart__item__content__settings">
          <div class="cart__item__content__settings__quantity">
            <p>Qté : ${item.quantity} </p>
            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${item.quantity}" data-id="${item.product._id}" data-color="${item.color}">
          </div>
          <div class="cart__item__content__settings__delete">
            <p class="deleteItem" data-id="${item.product._id}" data-color="${item.color}">Supprimer</p>
          </div>
        </div>
      </div>
    </article>`;

    insertStringInDOM("cart__items", "innerHTML", true, itemToDisplay)
  });
}

// function that will change the quantity of product
// const editQuantity = async (displayItems) => {

//   // waiting for the items display
//   await displayItems

//   // query all the inputs 
//   const inputsQuantity = document.querySelectorAll(".itemQuantity")
//   console.log(inputsQuantity)

//   // loop in the NodeList to get a specific input  and listen is onchange event
//   inputsQuantity.forEach((input) => {
//     input.addEventListener("change" ,() => {

//       // compare if data are equals

//       for(i=[0]; i<cartItems.lenght; i++) {
//         if(cartItems[i].product._id == input.dataset.id && cartItems[i].color == input.dataset.color) {
//           return console.log(input.value)
//         }
//       }
//     })
//   })
// }



// get all the prices values and multiply them with quantities to had a total price
const priceItemsSum = (items) => {

  return items.map(item => ({ price: item.quantity * item.product.price }));

  /**
   *  We can also do like this to display the total products price
   * 
    // declare an empty array of Items total price
    let itemsTotalPrice = [];
    items.forEach (item => {
      const sumItem = item.quantity * item.product.price
      // push all the prices data in the array
      itemsTotalPrice.push({
        price: sumItem
      });
    });
  return itemsTotalPrice;
   */
}
// function that will update the chosen item quantity and re display items on the dom
function updateQuantityitem() {
  // query all the input for quantity displayed dynamicly by the previous function
  const inputsQuantity = document.querySelectorAll(".itemQuantity");

  // loop in the NodeList to get a specific input when is value is change by the user
  inputsQuantity.forEach((input) => {
    input.addEventListener("change", e => {

      //we get the cart items that may have been previously saved bu the user
      const cartItems = getItemsFromLocalStorage("cartItems")

      const inputEl = e.target;

      // find the product in items that equal to the data-id attr of the input
      let cartItemHasBeenPreviouslySaved = false;
      cartItems.forEach(item => {
        // we compare generated cart item ID's to determine if previously saved
        if (getUID(item) === inputEl.getAttribute("data-id") + inputEl.getAttribute("data-color")) {
          console.log(item);
          // if we enter the condition then we can update the item quantity with the one that is being added by the user
          item.quantity = parseInt(inputEl.value);
          // we now know that the added cart item has been previously saved
          cartItemHasBeenPreviouslySaved = true;
        }
        console.log(item);
      });
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      displayItems(cartItems)
    })
  })
  
}

// waiting for the full loaded page
window.addEventListener('DOMContentLoaded', (event) => {

  // we get the cart items that may have been previously saved by the user
  const cartItems = getItemsFromLocalStorage("cartItems");

  // displaying the cart items on the page
  displayItems(cartItems);

  // display the all prices sum in the DOM
  document.getElementById("totalPrice").innerText = priceItemsSum(cartItems).map(item => item.price).reduce((prev, curr) => prev + curr, 0);

  // get all the quantity values and add them together
  //  display sum of values in DOM
  document.getElementById("totalQuantity").innerText = cartItems.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0);

  // query all the buttons displayed dynamicly by the previous function
  const deleteButtons = document.querySelectorAll(".deleteItem");

  // loop in the NodeList to get a specific button by clicking on
  deleteButtons.forEach((button) => {
    button.addEventListener("click", e => {

      // we get the cart items that may have been previously saved by the user
      const cartItems = getItemsFromLocalStorage("cartItems");

      const buttonEl = e.target;

      // find the product in items that is equal to the data-id attr of the btn
      const itemToDelete = cartItems.find(item => getUID(item) === buttonEl.getAttribute("data-id") + buttonEl.getAttribute("data-color"));
      const newItems = cartItems.filter(item => getUID(item) !== getUID(itemToDelete));

      console.log(newItems);

      // reset local storage with updated values
      localStorage.removeItem("cartItems");
      localStorage.setItem("cartItems", JSON.stringify(newItems));

      // delete deleted item from the DOM
      document.getElementById(getUID(itemToDelete)).remove();

      // recalculate and display totals with the new items values

      document.getElementById("totalPrice").innerText = priceItemsSum(newItems).map(item => item.price).reduce((prev, curr) => prev + curr, 0);

      document.getElementById("totalQuantity").innerText = newItems.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0);
    })
  })
  updateQuantityitem()
});