'use strict';

/* Use DOM property to add event*/

const btn = document.querySelector('button');

btn.onclick = function() {
    alert('Click');
};

btn.onclick = function() { // disadvantage, can assign only 1 event, previous event would be overrided
    alert('Second click');
};

/* Use addEventListener() or removeEventListener() to add/remove event */

const button = document.querySelector('#btn'),
    overlay = document.querySelector('.overlay');

button.addEventListener('click', () => {
    alert('Event first click');
});

button.addEventListener('click', () => {
    alert('Event second click');
});

let i = 0;
const deleteElement = (e) => {
    // e.target.remove();
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 5) {
    //     button.removeEventListener('mouseenter', deleteElement);
    // }
};

/* button.addEventListener('mouseenter', (e) => { //if we need to track the object of event we add e/event or whatever to the function
    // console.log(e);
    console.log(e.target);
    e.target.remove();
}); */

button.addEventListener('click', deleteElement); //refer to function
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault(); //cancel default behavior of the event
    console.log(event.target);
});

/* set same eventHandler to multiple elements */
//use for/forEach when working with pseudo array

const someBtns = document.querySelectorAll('.someClass'); //pseudo array

someBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        console.log("Press Btn");
    }, { once: true }); //3rd argument is option
});