'use strict';
/* classList */
const btns = document.querySelectorAll("button"),
    wrapper = document.querySelector('.btn-block');

console.log(btns[0].classList.length); //how many classes has element

console.log(btns[0].classList.item(0)); //element by index

console.log(btns[1].classList.add('red', 'trefgrte'));

console.log(btns[0].classList.remove('blue'));

console.log(btns[0].classList.toggle('blue'));

if (btns[1].classList.contains('red')) {
    console.log("red");
}

btns[0].addEventListener('click', () => {
    if (!btns[2].classList.contains('red')) {
        btns[2].classList.add('red');
    } else {
        btns[2].classList.remove('red');
    }
});

btns[1].addEventListener('click', () => {
    btns[3].classList.toggle('green');
});

console.log(btns[0].className); //deprecated due to returned value as string, complex work with string

/* event delegation - work with parent and set function to its child, using event.target. preferable method to add event on multiple homogeneous
elements*/

wrapper.addEventListener('click', (event) => {
    // if (event.target && event.target.classList.contains('green'))
    if (event.target && event.target.matches('button.green')) { //matches also can be used to specifically selector
        console.log("GREEN");
    } else if (event.target && event.target.tagName == "BUTTON") { //google recommendation for condition compose
        console.log("BUTTON");
    }
});

btns.forEach(btn => { //this method to addEvent would not work for btnNew, because it was added later dynamically and is not included in btns NodeList
    btn.addEventListener('click', () => {
        console.log("HELLO");
    });
});

const btnNew = document.createElement('button');
btnNew.classList.add('green');
wrapper.append(btnNew);