'use strict';

/* Create RegExp */
// new RegExp('pattern', 'flags');
// /pattern/flags;

/* Flags:
1: i = we want to search no matter the register
2: g = we want to search all matches
3: m = multiline search
*/

/* RegExp classes:
digits: \d
chars: \w
spaces: \s
not digits: \D
not chars: \W
not spaces: \S
*/

/* RegExp methods */

const ans = prompt('Enter your number');

const reg = /n/ig; //pattern to search (n)
const regNum = /\d/g;

console.log(ans.match(regNum));

// console.log(reg.test(ans)); //test() returns boolean

// console.log(ans.search(reg)); //search() returns index of the first searching element. returns -1 if there is no matching

// console.log(ans.match(reg)); //match() returns array. g flag returns array with all matches

// const pass = prompt("Password");

// console.log(pass.replace(/./g, '*')); //replace() gets any symbol and replace it with *

console.log('12-34-56'.replace(/-/g, ":"));

const str = "My name is R2D2";

console.log(str.match(/\w\d\w\d/i)); //regexp (/\w\d\w\d/i) = 1char 1digit 1char 1digit any register
console.log(str.match(/\W/g)); //regexp (/\W/g) = not char globally