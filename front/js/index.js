
// request api to get all the products
const fetchProducts = async() => {
    let listOfProducts = [];
    try {
        const APIResponse = await fetch("http://localhost:3000/api/products");
        listOfProducts = await APIResponse.json();
    } catch (err) {
        console.error(err);
    }
    return listOfProducts;
};

// display all the products on the home page 
const productsDisplay = (products) => {
    products.forEach((product, idx) => {
        document.getElementById("items").innerHTML += `<a href="./product.html?id="product_${product._id}">
            <article>
            <img src="${product.imageUrl}" alt="${product.altTxt}, Kanap name1">
            <h3 class="productName">${product.name}</h3>
            <p class="productDescription">${product.description}</p>
            </article>
        </a>`
    });
}

// waiting for the full loaded page
window.addEventListener('DOMContentLoaded', async (event) => {
    const products = await fetchProducts();
    productsDisplay(products);
});