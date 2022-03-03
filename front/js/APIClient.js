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
