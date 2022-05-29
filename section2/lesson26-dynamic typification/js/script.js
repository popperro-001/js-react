"use strict";

/* To String */
console.log(typeof(String(null))); //String();

console.log(typeof(5 + '')); //concat (something + string = string)

const num = 5;

console.log("http://vk.com/catalog/" + num); //better use `${}`

const fontSize = 26 + 'px';

/* To Number */
console.log(typeof(Number('4'))); //Number();

console.log(typeof(+'4')); //unary +

console.log(typeof(parseInt('15px', 10))); //parseInt();

let answer = +prompt("hello", '');

/* To Boolean */
/* 0, '', null, undefined, NaN == false */ //Native way

let switcher = null;

if (switcher) {
    console.log("Working");
}

switcher = 1;

if (switcher) {
    console.log("Working");
}

console.log(typeof(Boolean('4'))); //Boolean();

console.log(typeof(!!'4')); //using !!