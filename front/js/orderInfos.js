// regulars expression for text Names Email and adress fields
const re = /^[a-zA-ZÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ\s-,.\']+$/;
// const reAddress = /^("([a-zA-Z0-9_.-'])"+"$")/;
const reEmail = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;

// getting all inputs values

const inputFirstName = document.getElementById("firstName");
const inputLastName = document.getElementById("lastName");
const inputAddress = document.getElementById("address");
const inputCity = document.getElementById("city");
const inputEmail = document.getElementById("email");

// function that will validate those inputs
let validateInputs = true
function validateInputsForm(e) {
    e.preventDefault();
    if (inputFirstName.value == "") {
        // if first name is empty => display error message
        document.getElementById("firstNameErrorMsg").innerText = "Merci de renseigner un prénom";
        // the form should not be submitted
        return validateInputs = false,
            e.preventDefault();
    }
    if (!re.test(inputFirstName.value)) {
        // if  first name is not valid => display error message
        document.getElementById("firstNameErrorMsg").innerText = "Merci de renseigner un prénom valide";
        // the form should not be submitted
        return validateInputs = false,
            e.preventDefault();
    }
    else if (inputLastName.value == "") {
        // if last anme is empty => display error message
        document.getElementById("lastNameErrorMsg").innerText = "Merci de renseigner un nom";
        // the form should not be submitted
        return validateInputs = false,
            e.preventDefault();
    }
    if (!re.test(inputLastName.value)) {
        // if last name is not valid => display error message
        document.getElementById("lastNameErrorMsg").innerText = "Merci de renseigner un nom valide";
        // the form should not be submitted
        return validateInputs = false,
            e.preventDefault();
    }
    if (inputAddress.value == "") {
        // if address is empty => display error message
        document.getElementById("addressErrorMsg").innerText = "Merci de renseigner une adresse";
        // the form should not be submitted
        return validateInputs = false,
            e.preventDefault();
    }
    // if (!reAddress.test(inputAddress.value)) {
    //     // if address is not valid => display error message
    //     document.getElementById("addressErrorMsg").innerText = "Merci de renseigner une adresse valide";
    //     // the form should not be submitted
    //     return validateInputs = false,
    //     e.preventDefault();
    //}
    if (inputCity.value == "") {
        // if city is empty => display error message
        document.getElementById("cityErrorMsg").innerText = "Merci de renseigner une ville";
        // the form should not be submitted
        return validateInputs = false,
            e.preventDefault();
    }
    if (!re.test(inputCity.value)) {
        // if city is not valid => display error message
        document.getElementById("cityErrorMsg").innerText = "Merci de renseigner une ville valide";
        // the form should not be submitted
        return validateInputs = false,
            e.preventDefault();
    }
    if (inputEmail.value === "") {
        // if email is empty => display error message
        document.getElementById("emailErrorMsg").innerText = "Merci de renseigner une adresse mail";
        // the form should not be submitted
        return validateInputs = false,
            e.preventDefault();
    }
    if (!reEmail.test(inputEmail.value)) {
        // if email is not valid => display error message
        document.getElementById("emailErrorMsg").innerText = "Merci de renseigner une adresse mail valide";
        // the form should not be submitted
        return validateInputs = false,
            e.preventDefault();
    }
    else {
        validateInputs = true
    }
}

// create an object to send to the back end when the values are checked 
const createNewObjectForBackend = async (e) => {
    if (validateInputs = true) {
        // construct the payload to be compatible with what the API expects
        const orderObject = {
            firstName: inputFirstName.value,
            lastName: inputLastName.value,
            address: inputAddress.value,
            city: inputCity.value,
            email: inputEmail.value,
        }
        console.log(orderObject)
    }
    else e.preventDefault();
}
const product = getItemsFromLocalStorage("cartItems")


window.addEventListener('DOMContentLoaded', (event) => {

    // 1) listen to submit even on form
    document.querySelector('form').addEventListener('submit', e => {
        // 2) getting all the inputs values
        // 3) function that will validate form inputs
        // 3 - a) if values are not valid => display error message
        // the message should appear below the relevant input field
        // the form should not be submitted
        validateInputsForm(e);
        console.log(validateInputs)
        


        // 3 - b) all values are valid
        createNewObjectForBackend(e);

        // send the form payload to the API
        const sendPayloadToTheAPI = sendResource(createNewObjectForBackend(),product,"orderID")
        // 3 - b - a) API sends back an error response
        // display error message
        // should not be under any input field as it is not a user error 
        // 3 - b - b) API sends back a success reponse
        // redirect the user to the confirmation page with the correct order number
        // display that order number on the page

    });
})
