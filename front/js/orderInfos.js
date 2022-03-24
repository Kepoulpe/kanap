// getting all the form inputs when the user click on the submit button

window.addEventListener('DOMContentLoaded', (event) => {

    // 1) listen to submit even on form
    // 2) getting all the inputs values
    // 3) validate these values
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

});