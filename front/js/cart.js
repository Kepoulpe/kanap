// display all the items that we previously get form the local storage
const displayItems = (items) => {

  // loop in each item dor dynamic display
   items.forEach(item => {

    console.log(item);

     // modify DOM element to create an item card
    const itemToDisplay = `<article class="cart__item">
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

    // we get the delete button
    

    // we apply a click event on this delete button

    // this click event should trigger a behavior (function) that actually deletes the item

    // use the DOMHelper function to insert card in html
    insertStringInDOM("cart__items","innerHTML", true, itemToDisplay)
  });
}

// fucntion that will delete an item 
const deleteItems = async (displayItems) => {

  // waiting for the items display 
  await displayItems
 
  // query all the buttons display dynamicly buy the previous function
  const deleteButtons = document.querySelectorAll(".deleteItem")

  // loop in the NodeList to get a specific button by clicking on
  deleteButtons.forEach((button) =>{
    button.addEventListener("click", (cartItems) => {
    
      //compare if data are equals
      for (i=0; i< cartItems.lenght; i++) {

        if (cartItems[i].product._id ==  button.dataset.id && cartItems[i].color == button.dataset.color) {

          // if data is equal remove this specific item from local storage
          return localStorage.removeItem(cartItems[i])
        }
      }
    })
  })
}

// function that will change the quantity of product
const editQuantity = async (displayItems) => {

  // waiting for the items display
  await displayItems

  // query all the inputs 
  const inputsQuantity = document.querySelectorAll(".itemQuantity")
  console.log(inputsQuantity)

  // loop in the NodeList to get a specific input  and listen is onchange event
  inputsQuantity.forEach((input) => {
    input.addEventListener("change" ,() => {
      
      // compare if data are equals

      for(i=[0]; i<cartItems.lenght; i++) {
        if(cartItems[i].product._id == input.dataset.id && cartItems[i].color == input.dataset.color) {
          return console.log(input.value)
        }
      }
    })
  })
}



// get all the prices values and multiply them with quantities to had a total price
const priceItemsSum = (items) => {

  return items.map(item => ({price: item.quantity * item.product.price}));

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
  deleteItems(cartItems);
  editQuantity(cartItems);
  console.log(cartItems)
});