'use strict';

/* Array.prototype.filter() */

const names = ['Ivan', 'Ann', 'Kseniya', 'Aleksandr'];

const shortNames = names.filter(function(element) {
    return element.length < 5;
});

console.log(shortNames);

/* Array.prototype.map() */

let answers = ['PriVet', 'HellO', 'PassWord'];

answers = answers.map((element) => element.toLowerCase());

console.log(answers);

/* every() and some() return boolean */

const arr = [4, '3e1', 'sftrew'];

console.log(arr.some(element => typeof(element) === 'number')); //if at least 1 element suits the condition then true
console.log(arr.every(element => typeof(element) === 'number')); //if all elements suit the condition then true

/* Array.prototype.reduce() */

const array = [4, 5, 1, 3, 2, 6];
//                         0    4
//                         4    5
//                         9    1
//                         10   3
const res = array.reduce((sum, current) => sum + current); //1st arrg sets automatically and = 0, 2nd arrg is every element of array

console.log(res); //21

const stringArr = ['apple', 'pear', 'plum'];

const res2 = stringArr.reduce((res, element) => `${res}, ${element}`);

console.log(res2); //apple, pear, plum

/* Practice */

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};
//task to get names
const newArray = Object.entries(obj) //returns array in form [[key, value], [key, value]...]
    // [
    //     [ 'ivan', 'persone' ],
    //     [ 'ann', 'persone' ],
    //     [ 'dog', 'animal' ],
    //     [ 'cat', 'animal' ]
    //   ]
    .filter(element => element[1] === 'persone') //[ [ 'ivan', 'persone' ], [ 'ann', 'persone' ] ]
    .map(element => element[0]); //[ 'ivan', 'ann' ]

console.log(newArray);