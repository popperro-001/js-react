"use strict";

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Not Ok!');
}

const num = 50;

if (num < 49) {
    console.log('error');
} else if (num > 100) {
    console.log('too much');
} else {
    console.log('ok');
}

(num === 50) ? console.log('ok'): console.log('error');

const x = 50;

switch (x) {
    case 49:
        console.log('wrong');
        break;
    case 100:
        console.log('wrong');
        break;
    case 51:
        console.log('right');
        break;
    default:
        console.log('not this time');
        break;
}