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

// waiting for the full loaded page
window.addEventListener('DOMContentLoaded', async (event) => {
    const product = await fetchOneResource(productID, "products");
    displayCurrentProduct(product);
});

const numbers = [1,2,3];
const test = (...args) => {
    console.log(...args);
}

test(numbers)