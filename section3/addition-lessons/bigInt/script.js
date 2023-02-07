'use strict';

console.log(Number.MAX_SAFE_INTEGER);

const bigInt = 12321341231231242342354353453453453453454535334534534n;

const anotherBigInt = BigInt(12321341231231242342354353453453453453454535334534534);

console.log(typeof(bigInt));
/* bigint math */
//can not use with Math
//can not mess with Number
//can not use unary +

// console.log(5n + 1);
// console.log(Math.round(bigInt));

console.log(1n + 2n);

console.log(5n / 2n);//return round res without fractional part

console.log(5n > 2);//true

console.log(5n > 6);//false

console.log(5n == 5);//true

console.log(5n === 5);//false

let bigNum = 1n;
let num = 2;

console.log(bigNum + BigInt(num));
console.log(Number(bigNum) + num);//carefull convert bigint into Number, excessive part will be cut out