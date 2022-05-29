"use strict";

for (let i = 0; i < 4; i++) { // 0(0, 1, 2), 1(0, 1, 2), 2(0, 1, 2), 3(0, 1, 2)
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

/* draw triangle of * using loops
 *
 **
 ***
 ****
 *****
 ******
 */

let result = '';
const lengthOfRows = 7; // to compare the number of rows

for (let i = 1; i < lengthOfRows; i++) { //this loop forms rows

    for (let j = 0; j < i; j++) { //this loop forms number of * in each row
        result += '*';
    }

    result += '\n';
}

console.log(result);

/* labels */

first: for (let i = 0; i < 4; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) {
                continue first;
                // break first;
            }
            console.log(`Third level: ${k}`);
        }
    }
}