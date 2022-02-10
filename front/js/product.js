
// request a specific product
const fetchOneProduct = async(productID) => {
    // declare an empty object
    let product = {};
    try {
        // make the API call
        const APIResponse = await fetch(`http://localhost:3000/api/${productID}`, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
        });
        // get the product object
        product = await APIResponse.json();
    } catch (err) {
        console.error(err);
    }     
    return product;
};

// waiting for the full loaded page
window.addEventListener('DOMContentLoaded', async (event) => {
    // TODO get product id from 
    // TODO call API to get the actual product
    // TODO display product information on the page by manipulating the DOM
});