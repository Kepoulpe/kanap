/**
 * 
 * TODO use this in product page
 * 
 * @description returns a product id from a URL query param
 * 
* @param {string} key 
 * 
 * @returns {string}
 */
 function getValFromQS(key) {
    return (new URL(document.location)).searchParams.get(key);
};