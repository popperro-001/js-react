'use strict';

export let one = 1;

let two = 2;
export { two };

export default function sayHi() { //default export can be only one
    console.log('Hello');
}