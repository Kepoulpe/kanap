// display all the items that we previously get form the local storage
const displayItems = (items) => {

  // loop in each item dor dynamic display
   items.forEach(item => {

    console.log(item);

     // modify DOM element to create an item card
    const itemToDisplay = `<article class="cart__item" data-id="${item.product._id}" data-color="${item.color}">
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
            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="">
          </div>
          <div class="cart__item__content__settings__delete">
            <p class="deleteItem">Supprimer</p>
          </div>
        </div>
      </div>
    </article>`;

    // we get the delete button
    // id="delete_${item.product._id}" 415b7cacb65d43b2b5c1ff70f3393ad1
    // document.querySelector("article[data-id='415b7cacb65d43b2b5c1ff70f3393ad1'] .deleteItem");
    // we apply a click event on this delete button

    // this click event should trigger a behavior (function) that actually deletes the item

    // use the DOMHelper function to insert card in html
    insertStringInDOM("cart__items","innerHTML", true, itemToDisplay)
  });
}

// TODO delete an item 
// const deleteProduct = async (items) => {
//   // wait for the cartProducts function
//   await cartProducts;
//   // get all delete button
//   const deleteButton = document.querySelectorAll(".deleteItem") 
//   //get the parent element of the buttont to get data id and data color
//   const deleteButtonParent = document.querySelector(".cart__item")
//   console.log(deleteButton)
//   deleteButton.forEach((button) => {

//   button.addEventListener("click", () => {
//     console.log(deleteButtonParent)
//     // if products is empty delete local storage
//   })
//   })
// }

// get all the prices values and multiply them with quantities to had a total price
const priceItemsSum = (items) => {

  return items.map(item => ({price: item.quantity * item.product.price}));

  /**
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

// waiting for the full loaded page
window.addEventListener('DOMContentLoaded', async (event) => {

  // we get the cart items that may have been previously saved by the user
  const cartItems = getItemsFromLocalStorage("cartItems");

  // display the all prices sum in the DOM
  document.getElementById("totalPrice").innerText = priceItemsSum(cartItems).map(item => item.price).reduce((prev, curr) => prev + curr, 0); 

  // get all the quantity values and add them together
  //  display sum of values in DOM
  document.getElementById("totalQuantity").innerText = cartItems.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0);

  displayItems(cartItems);
});