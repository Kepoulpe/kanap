const getItemsFromLocalStorage = (key) => {
    // get what's existing in the local storage
    let items = localStorage.getItem(key);
    if (items != null) {
        items = JSON.parse(items);
    } else {
        items = [];
    }
    return items;
}    
     
        
