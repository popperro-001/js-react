"use strict";

console.log('arr' + " - object");
console.log(4 + " - object");
console.log(4 + +"5"); //unary +

let incr = 10,
    decr = 10;

// incr++;
// decr--;

console.log(incr++); //postfix
console.log(decr--); //postfix

console.log(++incr); //prefix
console.log(--decr); //prefix

console.log(5 % 2);

console.log(2 * 4 == 8);
console.log(2 * 4 == '8');
console.log(2 * 4 === '8');
console.log(2 * 4 === 8);

const isChecked = true,
    isClosed = false;

console.log(isChecked && isClosed);
console.log(isChecked || isClosed);
console.log(!isChecked || isClosed);

console.log(2 + 2 * 2 == 8);
console.log(2 + 2 * 2 != 8);
console.log(2 + 2 * 2 != '6');
console.log(2 + 2 * 2 !== '6');