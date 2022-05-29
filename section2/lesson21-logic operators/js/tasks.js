console.log(NaN || 2 || undefined); // 2 (1st true)

console.log(NaN && 2 && undefined); // NaN (1st false)

console.log(1 && 2 && 3); // 3 (last true)

console.log(!1 && 2 || !3); // false (!3 - the last false), && -> ||

console.log(25 || null && !3); // 25 (1st true), && -> ||

console.log(NaN || null || !3 || undefined || 5); // 5 (1st true)

console.log(NaN || null && !3 && undefined || 5); // 5 (1st true), && -> && -> || -> ||

console.log(5 === 5 && 3 > 1 || 5); // true (3 > 1), > -> === -> && -> ||

/* const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {// true, === -> === -> && -> && -> ||
   console.log('Done!');
}
 */


/* let hamburger; //undefined
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger || cola || fries === 3 || nuggets) { // true(nuggets), === -> ||...
    console.log('Done!');
} */

let hamburger; //undefined
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) { // false (fries === 3), === -> && -> && -> ||
    console.log('Done!');
}