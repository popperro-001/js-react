'use strict';

const box = document.querySelector('.box'),
    btn = document.querySelector('button'),
    // width = box.clientWidth,
    // height = box.clientHeight;
    // width = box.offsetWidth,
    // height = box.offsetHeight;
    width = box.scrollWidth,
    height = box.scrollHeight;

console.log(width, height);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);

/* Computed styles we can only get, but not set */
const style = window.getComputedStyle(box); //if we need to get styles of the pseudo element we need to use 2nd arg
console.log(style.display);

/* document/window */
console.log(document.documentElement.clientHeight); // to get property from document we need to refer to it through documentElement
console.log(document.documentElement.scrollTop);