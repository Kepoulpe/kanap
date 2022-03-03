const getProductsFromLocalStorage = () => {
    // get what's existing in the local storage
    let products = localStorage.getItem("products");
    if (products != null) {
        products = JSON.parse(localStorage.getItem("products"));
    } else {
        products = [];
    }
    return products;
}    
        
