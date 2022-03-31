/**
 * @param {Number} id id of the resource to fetch
 * @param {string} resourceName pluralized name of the resource to fetch
 * @return {Object} resource that is fetched from the API
 */
 const fetchOneResource = async(id, resourceName) => {
    // declare an empty object
    let obj = [];
    try {
        // make the API call
        const APIResponse = await fetch(`http://localhost:3000/api/${resourceName}/${id}`, {
        });
        // get the obj object
        obj = await APIResponse.json();
    } catch (err) {
        console.error(err);
    }     
    return obj;
};


/**
 * 
 * @param {string} resourceName pluralized name of the resource to fetch
 * @returns {Object[]}
 */
const fetchResources = async(resourceName) => {
    let objList = [];
    try {
        const APIResponse = await fetch(`http://localhost:3000/api/${resourceName}`);
        objList = await APIResponse.json();
    } catch (err) {
        console.error(err);
    }
    return objList;
};


/**
 * 
 * TODO make this more generic
 * 
 * @param {object} data data get from form and local storage to send to the API
 * @returns {object}
 */
const sendResource = async (contactData, productData) => {
    let obj =[]
    try {
        const APIResponse = await fetch("http://localhost:3000/api/products/order", {
            method:"POST",
            body:JSON.stringify({
                contact: contactData,
                products: productData
            })
        })
        obj = await APIResponse.json();
    }catch (err){
        window.alert("Une erreur est survenue merci de réessayer ultérieurement")
        console.log(err)
    }
    return obj;
};
