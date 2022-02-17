
// display all the products on the home page 
const productsDisplay = (products) => {
    products.forEach((product, idx) => {
        const linkToInsert = `<a href="./product.html?id=${product._id}">
            <article>
            <img src="${product.imageUrl}" alt="${product.altTxt}, Kanap name1">
            <h3 class="productName">${product.name}</h3>
            <p class="productDescription">${product.description}</p>
            </article>
        </a>`;
        insertStringInDOM("items", "innerHTML", true, linkToInsert);
    });
}

// waiting for the full loaded page
window.addEventListener('DOMContentLoaded', async (event) => {
    const products = await fetchResources("products");
    productsDisplay(products);
});