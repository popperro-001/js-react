'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

// if(block) {
//     console.log(block.textContent);
// };

console.log(block?.textContent);

console.log(2 + 1);

const userData = {
    name: 'Pavel',
    age: null,
    say: function() {
        console.log('hi');
    }
};

if(userData && userData.skills && userData.skills.js) {
    console.log(userData.skills.js);
}

console.log(userData.skills?.js);// return undefiend if not exist left side from the ?

userData.hey?.();//check for method existance, if not, returns nothing, continue operations without errors
userData.say();
