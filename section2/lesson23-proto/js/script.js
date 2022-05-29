"use strict";

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);

/* old way of setting __proto__ */
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const john = {
    health: 100,
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor); //got this property from prototype soldier
john.sayHello(); //got this property from prototype soldier

/* modern way of setting __proto__ */
const mike = {
    health: 250,
};

const bill = Object.create(soldier);

Object.setPrototypeOf(mike, soldier);

bill.sayHello();
mike.sayHello();