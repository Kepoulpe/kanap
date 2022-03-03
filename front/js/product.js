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

    // TODO change object structure of productToOrder ?
    const productToOrder = {
        product: product,
        chosenColor: select.value,
        quantity: parseInt(numberOfProduct.value),
        _id: product._id
    };
    newProductsToOrder.push(productToOrder);
    // get what's existing in the local storage
    let previousProductsToOrder = localStorage.getItem("products");
    if (previousProductsToOrder != null) {
        previousProductsToOrder = JSON.parse(localStorage.getItem("products"));
    } else {
        previousProductsToOrder = [];
    }

    // 1) get previousProductsToOrder items individually
    previousProductsToOrder.forEach(product => {
        // 2) compare id of the iterated product with the one that has been just added
        if (product._id === productToOrder._id && product.chosenColor === productToOrder.chosenColor) {
            // 3) we want to add to the previously selected matching product the quantity of the same new one
            product.quantity = parseInt(product.quantity) + productToOrder.quantity;
            // 4) we want to remove from the new products to order the matching product
            newProductsToOrder = newProductsToOrder.map(newProduct => {
                if (newProduct._id !== product._id) {
                    return newProduct;
                } else if (newProduct.chosenColor != product.chosenColor) {
                    return newProduct;
                } else {
                    return null;
                }
            }).filter(el => el !== null);
        }
    });

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