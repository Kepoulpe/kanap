/**
 * 
 * @description takes a product object as a parameter and displays it in the DOM
 * 
 * @param {Object} productObj 
 */
 const displayProduct = (productObj) => {
    productObj.colors.forEach((color,idx) => {
        insertStringInDOM("colors", "innerHTML", true,  `<option value="${color}">${color}</option>`);
    });
    const toInsertArr = [
        ["img", "innerHTML", false, `<img src="${productObj.imageUrl}" alt="${productObj.altTxt}">`],
        ["title", "innerText", false,`${productObj.name}`],
        ["price", "innerText", false,`${productObj.price}`],
        ["description", "innerText", false,`${productObj.description}`],
    ];    
    toInsertArr.forEach(toInsert => {
        insertStringInDOM(...toInsert);
    });
};

/**
 * 
 * @description returns a product id from a URL query param
 * 
 * @returns {string}
 */
 function getProductIdFromUrl() {
    return (new URL(document.location)).searchParams.get('id');
};

/**
 * 
 * @description persists a cart item in local storage to be processed in the cart page
 * 
 * @param {Object} addedCartItem 
 */
function persistCartItem(addedCartItem) {

    // we generate a unique id for the cart item, made of a product id and the color model
    const cartItemUID = addedCartItem.product._id + addedCartItem.color;

    // we get the cart items that may have been previously saved by the user
    const cartItems = getItemsFromLocalStorage("cartItems");

    // we check if an item with the same id and the same color has been previously saved
    let cartItemHasBeenPreviouslySaved = false;
    cartItems.forEach(item => {
        // we compare generated cart item ID's to determine if previously saved
        if (item.product._id + item.color === cartItemUID) {
            console.log(item);
            // if we enter the condition then we can update the item quantity with the one that is being added by the user
            item.quantity = parseInt(item.quantity) + addedCartItem.quantity;
            // we now know that the added cart item has been previously saved
            cartItemHasBeenPreviouslySaved = true;
        }
        console.log(item);
    });

    // we only push the added cart items to the array of cart items if it has not been saved before
    if (!cartItemHasBeenPreviouslySaved) {
        cartItems.push(addedCartItem);
    }

    // we put the cart items back to the local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}


// code execution

// we wait that all resources are loaded (including scripts) before proceeding
window.addEventListener('load', async () => {
    
    
    // we fetch a product object with its ID obtained from the current URL
    const productObj = await fetchOneResource(getProductIdFromUrl(), "products");

    // once we get that product we display it
    displayProduct(productObj);
    
    //set the title page dynamic
    document.title = productObj.name;
    // we get the add to cart button
    const addToCartBtn = document.getElementById("addToCart");

    // we listen to click events on that add to cart button
    addToCartBtn.addEventListener("click", () => {

        // we get the color selection and the quantity user input values
        const colorSelection = document.getElementById("colors").value;
        const quantityInput = document.getElementById("quantity").value;

        // we add color and quantity data to a cart item object
        const cartItemObj = {
            product: productObj,
            color: colorSelection,
            quantity: parseInt(quantityInput)
        }

        // we persist the cart item object
        persistCartItem(cartItemObj);

    }); // End Of `addToCartBtn` on click event

});