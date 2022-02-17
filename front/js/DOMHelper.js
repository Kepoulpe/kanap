
/**
 * 
 * @param {string} DOMId HTML id of the element we interact with
 * @param {"innerHTML"|"innerText"} HTMLInnerProp the HTML innner prop that we are using
 * @param {boolean} concat do we concatenate the string inside the existing element or not ?
 * @param {string} DOMStr the string to insert at the selected element
 * 
 * @return {void}
 */
const insertStringInDOM = (DOMId, HTMLInnerProp, concat, DOMStr) => {
    if (concat) {
        document.getElementById(DOMId)[HTMLInnerProp] += DOMStr;
    } else {
        document.getElementById(DOMId)[HTMLInnerProp] = DOMStr;
    }
};