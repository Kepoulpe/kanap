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
let addToCartProduct = [];

// get the select colors item and number of products
let select = document.getElementById("colors")
let numberOfProduct = document.getElementById("quantity")

// get all the current product values 
const addProduct = (product) => {
    addToCartProduct.push(product, select.value, numberOfProduct.value)
    // set the array in the local storage
    localStorage.setItem("product", JSON.stringify(addToCartProduct))
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