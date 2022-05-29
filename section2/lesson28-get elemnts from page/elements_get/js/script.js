'use strict';

/* getElement... return HTMLCollection which has no methods */
const box = document.getElementById('box');

console.log(box);

/* const btns = document.getElementsByTagName('button')[1]; */ // get only 2nd element
const btns = document.getElementsByTagName('button'); //if there is only 1 element on the page, we still get collection with 1 element in it, still need to refer by index

console.log(btns);
console.log(btns[1]); //get only 2nd element of collection

const circles = document.getElementsByClassName('circle');

console.log(circles);

/* querySelector returns NodeList which has 1 method - forEach */
const hearts = document.querySelectorAll('.heart'); //use css selectors (class=., id=#)

console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); //gets only 1st element from the page

console.log(oneHeart);