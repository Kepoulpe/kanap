 // we get the cart items that may have been previously saved by the user
 const cartItems = getItemsFromLocalStorage("cartItems");
console.log(cartItems)
// display all the items that we previously get form the local storage

const displayItems = (items) => {

  // loop in each item dor dynamic display
   cartItems.forEach(item => {
     // modify DOM element to create an item card
    const itemToDisplay = 
    `<article class="cart__item" data-id="${item._id}" data-color="${item.color}">
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
  // use the DOMHelper function to insert card in html
  insertStringInDOM("cart__items","innerHTML", true, itemToDisplay)
  });
}

// delete an item 
const deleteProduct = async (products) => {
  // wait for the cartProducts function
  await cartProducts;
  // get all delete button
  const deleteButton = document.querySelectorAll(".deleteItem") 
  //get the parent element of the buttont to get data id and data color
  const deleteButtonParent = document.querySelector(".cart__item")
  console.log(deleteButton)
  deleteButton.forEach((button) => {

  button.addEventListener("click", () => {
    console.log(deleteButtonParent)
    // if products is empty delete local storage
  })
  })
}

// get all the quantity values and add them together
const sumAll = cartItems.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0);
console.log(sumAll);

//  display sum of values in DOM
const displayItemsQuantity = document.getElementById("totalQuantity").innerText = sumAll


// declare an empty array of Items total price
let ItemsTotalPrice = [];
// get all the prices values and multiply them with quantities to had a total price


 


// waiting for the full loaded page
window.addEventListener('DOMContentLoaded', async (event) => {
  displayItems("items")
});