"use strict";
/* Function declaration */
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 15;
    console.log(num);
}

showFirstMessage("Hello, Pavel!");

console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(10, 2));
console.log(calc(7, 1));

function ret() {
    let num = 50;
    return num;
}

console.log(calc(ret(), 6));

/* Function expression */
const logger = function() {
    console.log('Hello');
};

logger();

/* Arrow function */

const calcNew = (a, b) => { return a + b; };

/* 1 */
function makeCounter() {
    let count = 0;
    return function() {
        return count++;
    };
}

let counter1 = makeCounter();
let counter2 = makeCounter();
/* alert(counter1()); //0
alert(counter1()); //1
alert(counter2()); //0
alert(counter2()); //1 */

/* 2 */

function Counter() {
    let count = 0;
    this.up = function() {
        ++count;
    };
    this.down = function() {
        --count;
    };
}
let counter = new Counter();
console.log(counter.up());
console.log(counter.up());
console.log(counter.down());

/* 3 */

let phrase = 'Hello';

if (true) {
    let user = 'John';

    function sayHi() {
        console.log(`${phrase} ${user}`);
    }
}

sayHi();