"use strict";

const hamburger = 5; // == true
const fries = true;
const cola = 0; // 0 == false
const nuggets = 3;
const icecream = 2;
const salad = 0;

/* 5 entities that always false */
//null == false
//undefined == false
//0 == false
//'' == false
//NaN == false

if (hamburger && fries) {
    console.log("I am full");
}
console.log((hamburger && fries));

if (hamburger && cola) {
    console.log("I ate");
}
console.log((hamburger && cola));

/* && rules:
    1: stops on 1st false value and returns it
    2: if all are true, returns the last true arg value
*/

console.log(hamburger === 5 && cola && nuggets); //return first false = 0 (cola)

console.log(hamburger === 5 && icecream && nuggets); //if all is true, returns last true = 3(nuggets)

console.log(1 && 0); // returns 0
console.log(1 && 5); // returns 5
console.log(null && 5); // returns null
console.log(0 && 'dsfsdgsdg'); // returns 0
console.log('sfsdfdsfs' && 12321312); // returns 12321312

/* || rules:
    1: stops on 1st true value and returns it
    2: if all are false, return the last false arg value
*/

if (hamburger || cola || salad) {
    console.log('Everyone are happy');
} else {
    console.log('We are leaving');
}

console.log(hamburger || cola || salad); //returns 5

console.log(0 || NaN || null); // returns null

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || mariaReport || samReport); // returns 'done'