'use strict';

const now = new Date(); //current date
// const now = new Date('2022-04-06');//as string in proper format
// const now = new Date(2020, 5, 1, 20); //month sstarts with 0(january), hours take into account timezone
// const now = new Date(0);//ms starting from 1970 1 january
// const now = new Date(-99999999); //-ms before from 1970 1 january

console.log(now);

/* get component of date */
console.log(now.getFullYear()); //4 digit format
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay()); //starts from Sunday(1)
console.log(now.getUTCHours());
console.log(now.getTimezoneOffset()); //difference between utc and local timezone in minutes
console.log(now.getTime()); //number of ms since 1970 1 january

/* set component of date */
const now1 = new Date();
now1.setHours(18, 40);
console.log(now1);

/* usage date in functions as timestamps */

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3; //operator ** powers number
}

let end = new Date();

alert(`Loop completed in ${end - start} milliseconds`); //we can check how long does it take to complete the loop