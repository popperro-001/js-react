"use strict";

let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i === 6) {
        // break;
        continue;
    }
    console.log(i);
}

/* Practice */

/* 1 */
let i = 3;
while (i) {
    console.log(i--);
}

/* 2 */
i = 0;

while (++i < 5) console.log(i);

i = 0;

while (i++ < 5) console.log(i);

/* 3 */
for (let i = 0; i < 5; i++) console.log(i);

for (let i = 0; i < 5; ++i) console.log(i);

/* 4 */
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

/* 5 */
let x = 0;
while (x < 3) {
    console.log(`number ${x}`);
    x++;
}

/* 6 */
let a;

do {
    a = prompt("Enter number more than 100", 0);
} while (a <= 100 && a);

/* 7 */

let n = 10;


nextPrime:
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        console.log(i);
    }