'use strict';

console.log(1);

setTimeout(() => {
    console.log('timeout 1');
}, 4000);

setTimeout(() => {
    console.log('timeout 2');
}, 4000);

console.log(2);