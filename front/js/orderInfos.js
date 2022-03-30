// regulars expression for text Names Email and adress fields
const re = /^[a-zA-ZÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ\s-,.\']+$/;
const reAddress = /^[a-zA-Z0-9_.-']*$/;
const reEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;





window.addEventListener('DOMContentLoaded', (event) => {

    // 1) listen to submit even on form
    document.querySelector('form').addEventListener('submit', e => {
        // 2) getting all the inputs values
        const inputFirstName = document.getElementById("firstName");
        const inputLastName = document.getElementById("lastName");
        const inputAddress = document.getElementById("address");
        const inputCity = document.getElementById("city");
        const inputEmail = document.getElementById("email");

        // 3) validate these values
        let validateInputs = false
        if (inputFirstName.value == "") {
            // if values are not valid => display error message
            document.getElementById("firstNameErrorMsg").innerText = "Merci de renseigner un prénom";
            // the form should not be submitted
            return e.preventDefault();
        }
        if (!re.test(inputFirstName.value)) {
            // if values are not valid => display error message
            document.getElementById("firstNameErrorMsg").innerText = "Merci de renseigner un prénom valide";
            // the form should not be submitted
            return e.preventDefault();
        }
        if (inputLastName.value == "") {
            // if values are not valid => display error message
            document.getElementById("lastNameErrorMsg").innerText = "Merci de renseigner un nom";
            // the form should not be submitted
            return e.preventDefault();
        }
        if (!re.test(inputLastName.value)) {
            // if values are not valid => display error message
            document.getElementById("lastNameErrorMsg").innerText = "Merci de renseigner un nom valide";
            // the form should not be submitted
            return e.preventDefault();
        }
        if (inputAddress.value == "") {
            // if values are not valid => display error message
            document.getElementById("addressErrorMsg").innerText = "Merci de renseigner une adresse";
            // the form should not be submitted
            return e.preventDefault();
        }
        if (!reAddress.test(inputAddress.value)) {
            // if values are not valid => display error message
            document.getElementById("addressErrorMsg").innerText = "Merci de renseigner une adresse valide";
            // the form should not be submitted
            return e.preventDefault();
        }
        if (inputCity.value == "") {
            // if values are not valid => display error message
            document.getElementById("cityErrorMsg").innerText = "Merci de renseigner une ville";
            // the form should not be submitted
            return e.preventDefault();
        }
        if (!re.test(inputCity.value)) {
            // if values are not valid => display error message
            document.getElementById("cityErrorMsg").innerText = "Merci de renseigner une ville valide";
            // the form should not be submitted
            return e.preventDefault();
        }
        if (inputEmail.value == "") {
            // if values are not valid => display error message
            document.getElementById("emailErrorMsg").innerText = "Merci de renseigner une ville";
            // the form should not be submitted
            return e.preventDefault();
        }
        if (!re.test(inputEmail.value)) {
            // if values are not valid => display error message
            document.getElementById("emailErrorMsg").innerText = "Merci de renseigner une ville valide";
            // the form should not be submitted
            return e.preventDefault();
        }
        

        return validateInputs = true
        // 3 - a) if values are not valid => display error message
            // the message should appear below the relevant input field
            // the form should not be submitted
        // 3 - b) all values are valid
            // construct the payload to be compatible with what the API expects
            // send the form payload to the API
                // 3 - b - a) API sends back an error response
                    // display error message
                        // should not be under any input field as it is not a user error 
                // 3 - b - b) API sends back a success reponse
                    // redirect the user to the confirmation page with the correct order number
                    // display that order number on the page
    })
    
    

});