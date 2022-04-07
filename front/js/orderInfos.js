// regulars expression for text Names Email and adress fields
const re = /^[\p{L}]+(-)*[\p{L}]+$/gu;
const reAddress = /^((\p{L}|[0-9])+(\s{1})(\p{L}|[0-9])+)+$/gu;
const reEmail = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/g;

// function that will validate those inputs
function validateInputsForm(e, inputs) {
    e.preventDefault();
    let validateInputs = true;
    inputs.forEach(input => {
        if (document.getElementById(input.id).value == undefined || document.getElementById(input.id).value.trim().length == 0) {
            document.getElementById(input.id + "ErrorMsg").innerText = "Merci de renseigner " + input.fieldName;
            validateInputs = false;
        } else if (!input.regex.test(document.getElementById(input.id).value)) {
            document.getElementById(input.id + "ErrorMsg").innerText = "Merci de renseigner " + input.fieldName + " valide";
            validateInputs = false;
        }
    });
    return validateInputs;
}

window.addEventListener('load', (event) => {

    const canSubmit = getItemsFromLocalStorage("cartItems")
    if (canSubmit.length == 0) {
        document.getElementById("order").disabled = true;
    } else document.getElementById("order").disabled = false;


    // 1) listen to submit even on form
    document.querySelector('form').addEventListener('submit', (e) => {

        const inputFirstName = document.getElementById("firstName");
        const inputLastName = document.getElementById("lastName");
        const inputAddress = document.getElementById("address");
        const inputCity = document.getElementById("city");
        const inputEmail = document.getElementById("email");

        // getting all inputs values and creating objects for validation
        const inputs = [
            { fieldName: "un prénom", id: "firstName", regex: re },
            { fieldName: "un nom", id: "lastName", regex: re },
            { fieldName: "une adresse", id: "address", regex: reAddress },
            { fieldName: "une ville", id: "city", regex: re },
            { fieldName: "une adresse email", id: "email", regex: reEmail },
        ];

        // the message should appear below the relevant input field
        // the form should not be submitted
        // TODO fix validation logic
        const isValidated = validateInputsForm(e, inputs);

        if (isValidated) {
            const contactData = {
                firstName: inputFirstName.value,
                lastName: inputLastName.value,
                address: inputAddress.value,
                city: inputCity.value,
                email: inputEmail.value,
            }

            const products = getItemsFromLocalStorage("cartItems");
            let productData = []
            products.forEach(product => {
                productData.push(product.product._id)
            })

            // send the form payload to the API
            // sendResource(contactData, productData, "orderID").then(res => {
            //     // clean the local storage if the redirect have been done 
            //     localStorage.removeItem("cartItems");
            //     // redirect the user to the confirmation page with the correct order number
            //     location.href = `./confirmation.html?order-id=${res.orderId}`;
            // });
        } 

    });
})



