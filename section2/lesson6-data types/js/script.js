"use strict";
/* number */
let number = 4;

console.log(-4 / 0); //Infinity
console.log(-4 / 0); //-Infinity

console.log('string' * 9); //NaN (Not a Number)

/* string */
const person = "Alex";
const person2 = 'Bob';
const person3 = `Jim`;

/* boolean */
const bool = false;

/* null */
let und;
console.log(und); //undefined

/* Object */
const obj = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(obj.name);
console.log(obj['name']);

/* array */
let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {},
    []
]; //arrays are complex types of data and can include any type of data in them
console.log(arr[1]);