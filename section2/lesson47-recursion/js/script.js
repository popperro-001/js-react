"use strict";

function pow(x, n) {
    let res = 1;

    for (let i = 0; i < n; i++) {
        res *= x;
    }

    return res;
}

function pow(x, n) {
    if (n === 0) {
        return 1;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log(pow(2, 0));
console.log(pow(2, 1));
console.log(pow(2, 2));
console.log(pow(2, 3));
console.log(pow(2, 4));

/* for method */
function getAverageProgressByIteration(data) {
    let total = 0; //adding sub elements
    let students = 0; //adding sub elements

    for (let course of Object.values(data)) { //get 1st level of values of the object
        if (Array.isArray(course)) { //check if it is array
            students += course.length; //add number of students
            for (let i = 0; i < course.length; i++) { //iterate the array to get all elements
                total += course[i].progress;
            }
        } else { //if it is object
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;
                for (let i = 0; i < subCourse.length; i++) { //iterate the array to get all elements
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

/* using recursion method
    we need: base and step of the recursion
*/
function getAverageProgressByRecursion(data) {
    if (Array.isArray(data)) { // recursion base
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length]; // function returns 2 elements
    } else { // recursion step
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArray = getAverageProgressByRecursion(subData); // run recurtion
            total[0] += subDataArray[0];
            total[1] += subDataArray[1];
        }

        return total; //function returns 2 elements
    }
}

const result = getAverageProgressByRecursion(students);

console.log(result[0] / result[1]); //41.6

console.log(getAverageProgressByIteration(students)); //41.6