const getItemsFromLocalStorage = (key) => {
    // get what's existing in the local storage
    let products = localStorage.getItem(key);
    if (products != null) {
        products = JSON.parse(products);
    } else {
        products = [];
    }
    return products;
}    
     
        
