'use strict';
/* static collection */
//do not track for changes in DOM
const boxesQuery = document.querySelectorAll('.box');

/* live collection */
//track changes in DOM
//can not add/delete/mutate elements using default array methods
const boxesGet = document.getElementsByClassName('box');

boxesQuery.forEach(box => {
    if(box.matches('.this')) console.log(box);//matches check for existance of the selectors at the element
});

console.log(boxesQuery[0].closest('.wrapper'));//check for parent elements of the element

boxesQuery[0].remove();
boxesGet[0].remove();

for(let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    document.body.append(div);
}

console.log(boxesQuery);//returns NodeList with additional methods: entries, forEach, keys
console.log(boxesGet);//returns HTMLCollection no additional methods

console.log(Array.from(boxesGet));//returns static array, use if need to track changes at some point in time from the declaration and etc