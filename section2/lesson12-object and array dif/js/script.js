"use strict";

const arr = ['a', 'b', 'c'];
const arrObj = {
    0: 'a',
    1: 'b',
    2: 'c'
};
console.log(arr[1]);
console.log(arrObj[1]);

arrObj.b = '1234';
console.log(arrObj['b']);
console.log(arrObj.b);

arrObj['c'] = '321';
console.log(arrObj['c']);
console.log(arrObj.c);

const z = 'g';
arrObj[z] = '555';
console.log(arrObj['g']);
console.log(arrObj.g);
console.log(arrObj);


const obj = {
    Anna: 500,
    'Alice': 800
};