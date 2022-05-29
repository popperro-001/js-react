'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    wrapper = document.querySelector('.wrapper'),
    oneHeart = wrapper.querySelector('.heart'); //we can use element instead of document to get another element


// console.dir(box); //get all properties and methods of the element

/* Inline styles, have higher priority than CSS styles */
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
let num = 550;
box.style.cssText = `background-color: blue; width: 500px; height: ${num}px`;

btns[1].style.borderRadius = '100%';

// circles.style.backgroundColor = 'red'; //doesn't work on array
circles[1].style.backgroundColor = 'red'; //use element by index

console.log(hearts);

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'yellow';
});

const div = document.createElement('div'); //this element now exists only on script.js

const text = document.createTextNode('I was here');

div.classList.add('black'); //added CSS class from style.css

/* Manipulate with element div */
document.body.append(div); //adding element div to parent element body to the end

document.querySelector('.wrapper').append(div); //if we use element(.wrapper) only once it is not necessary to assign it to the variable

wrapper.prepend(div);
/* wrapper.appendChild(div); older way to add element */

hearts[1].after(div);
hearts[1].before(div);
/* wrapper.insertBefore(div, hearts[1]); older way to add element before/after some other element */

circles[0].remove();
/* wrapper.removeChild(hearts[0]); older way to remove element always using parent */

btns[3].replaceWith(hearts[2]);
/* wrapper.replaceChild(circles[0], hearts[0]); older way to replace hearts[0] with circles[0] */

/* Edit element div */
div.innerHTML = "<h1>Hello World</h1>"; //we can insert HTML structures

// div.textContent = "Privet"; //works only as text content

div.insertAdjacentHTML('beforebegin', '<h2>Privet</h2>');

oneHeart.style.backgroundColor = 'green';