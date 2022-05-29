'use strict';


/* from the parent perspective */
console.log(document.head); //refer to head tag

console.log(document.documentElement); //refer to html tag

console.log(document.body.childNodes); //child nodes of parent

for (let node of document.body.childNodes) { //get child elements of parent
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}

console.log(document.body.firstChild); //get node

console.log(document.body.firstElementChild); //get element

console.log(document.body.lastChild); //get node

console.log(document.body.lastElementChild); //get element


/* from any point in the DOM */
console.log(document.querySelector('#current').parentNode); //get parent of element with id=current

console.log(document.querySelector('#current').parentElement); //we can be sure to get element

console.log(document.querySelector('#current').parentNode.parentNode); //get parent of the parent


/* HTML5 data-* */
console.log(document.querySelector('[data-current="3"]').nextSibling); //here we get textNode

console.log(document.querySelector('[data-current="3"]').previousSibling); //here also we gaet textNode

console.log(document.querySelector('[data-current="3"]').nextElementSibling); //here we get element

console.log(document.querySelector('[data-current="3"]').previousElementSibling); //here we get element