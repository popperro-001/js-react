'use strict';

const number = 1; //global variable

/* create module */
(function() { //IIFE, Immediately-Invoked Function Expression
    let number = 2; //local variable
    console.log(number);
    console.log(number + 3);
}());

console.log(number); //global varaible

const user = (function() {
    const privat = function() {
        console.log('I am private');
    };

    return { //export only necessary mathods and fields
        sayHello: privat
    };
}());

user.sayHello();