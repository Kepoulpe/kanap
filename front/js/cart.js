//get the cart in the local storage
let products = localStorage.getItem("products");

// display all the products on the cart page

const cartProducts = (products) => {

  // TODO factorize this local storage retrieval behavior in one function
  products = JSON.parse(products);
  console.log(products);
  const product = products[0].product;

  return `<article class="cart__item" data-id="${product._id}" data-color="${product.color}">
    <div class="cart__item__img">
      <img src="${product.imageUrl}" alt="${product.altText}">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>${product.name}</h2>
        <p>${product.color}</p>
        <p>42,00 €</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : ${product.quantity} </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
  </article>`;

}

// waiting for the full loaded page
window.addEventListener('DOMContentLoaded', async (event) => {
  insertStringInDOM("cart__items","innerHTML", true, cartProducts(products));
});