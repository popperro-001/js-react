"use strict";


// let number = 5;
// debugger

// function logNumber() {
//     let number = 4;
//     debugger
//     console.log(number);
// }

// number = 6;

// logNumber();
// debugger // 6



function createCounter() {
    let counter = 0;

    const myFunction = function() {
        debugger
        counter = counter + 1;
        debugger
        return counter;
        debugger
    };

    return myFunction;
}
debugger
const increment = createCounter();
debugger // we put myFunction()

const c1 = increment();
debugger //1
const c2 = increment();
debugger //2
const c3 = increment();
debugger //3

console.log(c1, c2, c3);