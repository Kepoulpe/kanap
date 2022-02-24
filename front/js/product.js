// get the ID product from URL
const params = (new URL(document.location)).searchParams;
let productID = params.get('id');

// Display the current product 
const displayCurrentProduct = (product) => {
    product.colors.forEach((color,idx) => {
        insertStringInDOM("colors", "innerHTML", true,  `<option value="${color}">${color}</option>`);
    });
    const toInsertArr = [
        ["img", "innerHTML", false, `<img src="${product.imageUrl}" alt="${product.altTxt}">`],
        ["title", "innerText", false,`${product.name}`],
        ["price", "innerText", false,`${product.price}`],
        ["description", "innerText", false,`${product.description}`],
    ];    
    toInsertArr.forEach(toInsert => {
        insertStringInDOM(...toInsert);
    });
};

// add product to the cart

// get the add to cart button
const button = document.getElementById("addToCart")

// create an empty array of product 
let newProductsToOrder = [];

// get the select colors item and number of products
let select = document.getElementById("colors")
let numberOfProduct = document.getElementById("quantity")

// get all the current product values 
const addProduct = (product) => {
    const productToOrder = {
        product: product,
        chosenColor: select.value,
        quantity: numberOfProduct.value
    };
    newProductsToOrder.push(productToOrder);
    // get what's existing in the local storage
    let previousProductsToOrder = localStorage.getItem("products");
    if (previousProductsToOrder != null) {
        previousProductsToOrder = JSON.parse(localStorage.getItem("products"));
    } else {
        previousProductsToOrder = [];
    }
    const productsToOrder = newProductsToOrder.concat(previousProductsToOrder);
    // set the array in the local storage
    localStorage.setItem("products", JSON.stringify(productsToOrder));
}

// waiting for the full loaded page
window.addEventListener('DOMContentLoaded', async (event) => {
    const product = await fetchOneResource(productID, "products");
    displayCurrentProduct(product);
    button.addEventListener('click', event => {addProduct(product)})
});





// const numbers = [1,2,3];
// const test = (...args) => {
//     console.log(...args);
// }

// test(numbers)