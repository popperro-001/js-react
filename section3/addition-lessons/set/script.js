'use strict';

const arr = [1, 1, 3, 4, 3, 2, 2, 5, 6]

const set = new Set(arr);

console.log(set);

const students = ['Alex', 'Ann', 'Bob', 'Ann'];

const studSet = new Set(students);
studSet.add('Ivan');
studSet.add('Bob');
console.log(studSet);

// studSet.delete();
// studSet.has();
// studSet.clear();
// studSet.size;

for(let value of studSet) console.log(value);

studSet.forEach((value, valueAgain, set) => {
    console.log(value, valueAgain);
});

console.log(studSet.values());
console.log(studSet.keys());
console.log(studSet.entries());

/* practical usage */
function unique(arr) {
    return Array.from(new Set(arr));
};

console.log(unique(students));