//get the cart in the local storage
let products = localStorage.getItem("products");

// display all the products on the cart page

const cartProducts = (products) => {

  // TODO factorize this local storage retrieval behavior in one function
  products = JSON.parse(products);
  console.log(products);
   products.forEach(product => {
    const productToDisplay = `<article class="cart__item" data-id="${product.product._id}" data-color="${product.chosenColor}">
    <div class="cart__item__img">
      <img src="${product.product.imageUrl}" alt="${product.product.altText}">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>${product.product.name}</h2>
        <p>${product.chosenColor}</p>
        <p>${product.product.price} €</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : ${product.quantity} </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
  </article>`;
  insertStringInDOM("cart__items","innerHTML", true, productToDisplay)
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
// display total quantity
const totalQuantity = (products) => {
  products = JSON.parse(products)
  const sum = products.quantity;
  console.log(sum)
}

 


// waiting for the full loaded page
window.addEventListener('DOMContentLoaded', async (event) => {
  cartProducts(products)
  deleteProduct(products)
  totalQuantity(products)
});