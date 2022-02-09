

let productData = [];
const numberOfProducts = 8;
// request api to get all the products
const fetchProducts = async() => {
    await fetch("http://localhost:3000/api/products")
        .then((res) => res.json())
        .then((res) => {
            productData = res;
            console.log(productData);
        });
};
// request a specific product
// const productID = _id.value(productData)
const fetchOneProduct = async(productID) => {
    await fetch(`http://localhost:3000/api/${productID}`,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
    })
        .then((res) => res.json())
        .then((res) => {
            productData = res;
            console.log(productDataOneProduct);
        });
};
// display all the products on the home page (do we need a for loop to display each product ?)
 const productDisplay = async() => {
     await fetchOneProduct();

     document.getElementById("items").innerHTML = `<a href="./product.html?id=">
     <article>
       <img src="${productDataOneProduct.imageUrl}" alt=${productDataOneProduct.altTxt}, Kanap name1">
       <h3 class="productName">${productDataOneProduct.name}</h3>
       <p class="productDescription">${productDataOneProduct.description}</p>
     </article>
   </a> `
 }

// fetchOneProduct();

const postOrder = async() => {
    // TODO (with method POST) + pass order data to the request
    await fetch(`http://localhost:3000/api/products/order`)
        .then((res) => res.json())
        .then((res) => {
            productData = res;
            console.log(productData);
        });
}
// waiting for the full loaded page
window.addEventListener('DOMContentLoaded', (event) => {
    fetchProducts();
    productDisplay()
});

// we use the function
// fetchProducts();
// fetchOneProduct("415b7cacb65d43b2b5c1ff70f3393ad1");

// synchronous
// console.log("this");
// console.log("that");
// "this" will appear before "that"

// asynchronous
// console.log("this");
// setTimeout(() => {
//     console.log("asynchronous this");
// }, 2);
// setTimeout(() => {
//     console.log("asynchronous that");
// }, 1);
// console.log("that");