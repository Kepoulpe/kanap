let productData = [];

// we define the function
const fetchProducts = async() => {
    await fetch("http://localhost:3000/api/products")
        .then((res) => res.json())
        .then((res) => {
            productData = res;
            console.log(productData);
        });
};

const fetchOneProduct = async(productId) => {
    await fetch(`http://localhost:3000/api/products/${productId}`)
        .then((res) => res.json())
        .then((res) => {
            productData = res;
            console.log(productData);
        });
};

const postOrder = async() => {
    // TODO (with method POST) + pass order data to the request
    await fetch(`http://localhost:3000/api/products/order`)
        .then((res) => res.json())
        .then((res) => {
            productData = res;
            console.log(productData);
        });
}


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