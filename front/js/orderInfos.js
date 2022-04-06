// regulars expression for text Names Email and adress fields
const re = /^[\p{L}]+(-)*[\p{L}]+$/gu;
const reAddress = /^((\p{L}|[0-9])+(\s{1})(\p{L}|[0-9])+)+$/gu;
const reEmail = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/g;

// function that will validate those inputs
function validateInputsForm(e, inputs) {
    e.preventDefault();
    let validateInputs = true;
    inputs.forEach(input => {
        if (input.value == undefined || input.value.trim().length == 0) {
            document.getElementById(input.errId + "ErrorMsg").innerText = "Merci de renseigner " + input.fieldName;
            validateInputs = false;
        } else if (!input.regex.test(input.value)) {
            console.log(input);
            document.getElementById(input.errId + "ErrorMsg").innerText = "Merci de renseigner " + input.fieldName + " valide";
            validateInputs = false;
        }
    });
    return validateInputs;
}

window.addEventListener('DOMContentLoaded', (event) => {
    const canSubmit = getItemsFromLocalStorage("cartItems")
    if (canSubmit.length == 0) {
        document.getElementById("order").disabled = true;
    } else document.getElementById("order").disabled = false;


    // 1) listen to submit even on form
    document.querySelector('form').addEventListener('submit', async (e) => {

        // TODO turn this into an array of product id's


        const inputFirstName = document.getElementById("firstName");
        const inputLastName = document.getElementById("lastName");
        const inputAddress = document.getElementById("address");
        const inputCity = document.getElementById("city");
        const inputEmail = document.getElementById("email");

        // getting all inputs values and creating objects for validation
        const inputs = [
            { input: inputFirstName, fieldName: "un prénom", errId: "firstName", regex: re },
            { input: inputLastName, fieldName: "un nom", errId: "lastName", regex: re },
            { input: inputAddress, fieldName: "une adresse", errId: "address", regex: reAddress },
            { input: inputCity, fieldName: "une ville", errId: "city", regex: re },
            { input: inputEmail, fieldName: "une adresse email", errId: "email", regex: reEmail },
        ];

        // 2) getting all the inputs values
        // 3) function that will validate form inputs
        // 3 - a) if values are not valid => display error message
        // the message should appear below the relevant input field
        // the form should not be submitted
        const isValidated = validateInputsForm(e, inputs);

        if (!isValidated) {
            const contactData = {
                firstName: inputFirstName.value,
                lastName: inputLastName.value,
                address: inputAddress.value,
                city: inputCity.value,
                email: inputEmail.value,
            }

            // TODO issue with the fetch bad request maybe the body format is not apropriate had to find how to consstruct him to send the data to the API
            const products = getItemsFromLocalStorage("cartItems");
            console.log(products)
            let productData = []
            products.forEach(product => {
                productData.push(product.product._id)
            })
            console.log(productData)


            // TODO send the expected payload to the API (contact obj + products array of id's)
            // 3 - b) all values are valid
            // createNewObjectForBackend(e);
            // send the form payload to the API
            const sendPayloadToTheAPI = await sendResource(contactData, productData, "orderID");
            // TODO rest of the logic
            // 3 - b - a) API sends back an error response
            // display error message
            // should not be under any input field as it is not a user error 
            // 3 - b - b) API sends back a success reponse
            // redirect the user to the confirmation page with the correct order number
            // display that order number on the page
        }

    });
})



