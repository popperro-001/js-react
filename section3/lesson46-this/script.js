'use strict';

/* 4 ways to call a function */

/* 1: Common function: this = window(in strict mode = undefined) */
function showThis(a, b) {
    console.log(this); //no matter where function is called, it will be window or undefined

    function sum() {
        console.log(this); //no matter where function is called, it will be window or undefined
        // return this.a + this.b; //this will not work
        return a + b; //it works
    }

    console.log(sum());
}

showThis(2, 5);

/* 2: Object methods: this = object itself */

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this); //this equals object
        function shout() {
            console.log(this); //common function, thus window or undefined
        }
        shout();
    }
};
obj.sum();

/* 3: Constructor function with new: this = new sample of the object*/

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log("Hello, " + this.name);
    }
}
let ivan = new User('Ivan', 2);

/* 4: Manual connection of this using call(), apply(), bind() */

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith'); //call() and apply() apply function to object, the difference in arg set
sayName.apply(user, ['Smith']); //apply uses array as arg

function count(num) {
    return this * num;
}

const double = count.bind(2); //creates new function where we pass arg (2) and bind it to this in count() 

console.log(double(3)); // num = 3, this = 2
console.log(double(13)); //num = 13, this = 2

/* Practice */

const btn = document.querySelector('.btn1');

btn.addEventListener('click', function() { //this = element with event
    console.log(this);
    this.style.backgroundColor = 'red';
});

const btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', (e) => { //this = window or undefined, due to arrow functions have no own context(this). we can not use this in arrow function. use (e) => e.target instead to reffer to this
    // this.style.backgroundColor = 'green';
    e.target.style.backgroundColor = 'green';
});

const object = {
    num: 5,
    sayNumber: function() {
        const say = () => { //arrow functions do not have its own context(this), thus it is always reffer to its parent(in this case this = object)
            console.log(this);
            console.log(this.num); //it works bacause this.num = object.num
        };
        say();
    }
};
object.sayNumber();

const calc = a => a * 2; //if action is 1 line we can omit {return} syntaxis

console.log(calc(4));