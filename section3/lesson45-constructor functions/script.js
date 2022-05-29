'use strict';

/* ES 5 Constructor functions*/
const num = new Number(3);
console.log(num);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;

    this.hello = function() {
        console.log(`Hello, I am ${this.name}`);
    };
}

User.prototype.exit = function() { //if we want to add something (property or method) to our constructor
    console.log(`User ${this.name} has left`);
};

const ivan = new User('Ivan', 1);
const alex = new User("Alex", 2);
console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();

ivan.exit();
alex.exit();

/* ES 6 - Classes */

class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello, I am ${this.name}`);
    }
    exit() {
        console.log(`User ${this.id} has left`);
    }
}

let bob = new Person('Bob', 3);

console.log(bob);
bob.hello();
bob.exit();