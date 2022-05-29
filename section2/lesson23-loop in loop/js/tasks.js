function firstTask() {
    for (let i = 5; i < 11; i++) {
        console.log(i);
    }
}

firstTask();

for (let i = 20; i > 9; i--) {
    if (i === 13) {
        break;
    }
    console.log(i);
}

for (let i = 2; i < 11; i++) {
    if (i % 2 === 1) {
        continue;
    }
    console.log(i);
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}
// let i = 2;
// while (i < 16) {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

const arrayOfNumbers = [];
for (let i = 5, k = 0; i < 11; i++) {
    arrayOfNumbers[k] = i;
    k++;
}
console.log(arrayOfNumbers);

let i = 2;

while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}
console.log(result);

const data = [5, 10, 'Shopping', 20, 'Homework'];
for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === 'string') {
        data[i] += " - done";
    } else {
        data[i] = data[i] * 2;
    }
}
console.log(data);

const data1 = [5, 10, 'Shopping', 20, 'Homework'];
const result1 = [];
for (let i = 0; i < data1.length; i++) {
    result1[i] = data1[data1.length - 1 - i];
}
console.log(result1);

const lines = 5;
let result3 = '';

for (let i = 0; i <= lines; i++) {

    for (let j = 0; j < lines - i; j++) {
        result3 += ' ';
    }

    for (let j = 0; j < 2 * i + 1; j++) {
        result3 += '*';
    }

    result3 += '\n';
}

console.log(result3);