"use strict";


const obj = new Object();

const options = {
    name: 'test',
    width: 1024,
    heigth: 1024,
    colors: {
        border: 'black',
        background: 'red'
    }
};

console.log(options['name']);

delete options.name;

console.log(options.name);

for (let prop in options) {
    console.log(`Property ${prop} has value ${options[prop]}`);
}

for (let key in options['colors']) {
    console.log(`Property ${key} has value ${options.colors[key]}`);
}

for (let prop in options) {
    if (typeof(options[prop]) === 'object') {
        for (let key in options[prop]) {
            console.log(`Property ${key} has value ${options[prop][key]}`);

        }
    } else {
        console.log(`Property ${prop} has value ${options[prop]}`);

    }
}

let counter = 0;

for (let key in options) {
    counter++;
}

console.log(counter);

/* Object methods */

const features = {
    name: 'test',
    width: 1024,
    heigth: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function() {
        console.log("Testing"); //custom method create
    }
};

console.log(Object.keys(features)); //array of keys of the object
console.log(Object.keys(features.colors));
console.log(Object.keys(features).length); //number of keys of the object

features.makeTest(); //custom method launch

/* Object deconstruction */

const example = {
    name: 'test',
    width: 1024,
    heigth: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Testing"); //custom method create
    }
};

const { border, bg } = example.colors;

console.log(border);
console.log(bg);