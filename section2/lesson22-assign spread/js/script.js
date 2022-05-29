"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; //we pass link to obj

copy.a = 10; //now we modified original obj using link

console.log(copy);
console.log(obj);

/* How to copy object */
/* create own function */
function copyObj(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyObj(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10; //this function we created is not working on included objects (it is not deep copy)

console.log(newNumbers);
console.log(numbers);

/* use Object.assign() */

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add); // also not deep copy

clone.d = 35;

console.log(clone);
console.log(add);

/* Copy of Array */

const oldArray = ['a', 'b', 'v'];
const newArray = oldArray.slice(); //create copy of array
newArray[2] = 'Hello, world!';

console.log(oldArray);
console.log(newArray);

/* ES6 Spread (...) */

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...blogs, ...video, 'vk', 'facebook']; //spread operator (...source array)

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 6, 7];
log(...num);

const array = ['a', 'b'];
const copyArray = [...array];
copyArray[0] = 'c';

console.log(array);
console.log(copyArray);

const q = {
    one: 1,
    two: 2
};

const newQ = {...q };

newQ.two = 3;

console.log(q);
console.log(newQ);