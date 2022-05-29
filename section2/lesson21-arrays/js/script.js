"use strict";
/* Array methods */
const arr = [1, 2, 3, 6, 8];

/* arr[99] = 0;
console.log(arr.length);
console.log(arr); */

arr.pop(); //remove last element of array

console.log(arr);

arr.push(12); //add element to the end of the array

console.log(arr);

const str = prompt("", "");

const products = str.split(", ");

products.sort();

console.log(products.join('; '));


const arr1 = [2, 13, 26, 8, 10];

console.log(arr1.sort()); //originally sorts as string, because it uses inside "fast sort" function

console.log(arr1.sort(compareNum)); // sorts according function we passed as number

function compareNum(a, b) {
    return a - b;
}

/* Array iteration */
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} inside array of ${arr}`);
});

/* Pseudo arrays */

//pseudo arrays have no Array.methods (like: foreEach, sort, push adn etc)