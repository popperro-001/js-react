"use strict";

const family = ['Peter', 'Ann', 'Alex', 'Linda'];
const empty = [];

function showFamily(arr) {
    let str = 'Семья состоит из: ';

    if (arr.length === 0) {
        str = 'Семья пуста';
    }

    for (let item of arr) {
        str += `${item} `;
    }

    return str;
}




const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (let item of arr) {
        console.log(item.toLowerCase());
    }
}

standardizeStrings(favoriteCities);




const someString = 'This is some strange string';

function reverse(str) {
    let res = '';

    if (typeof(str) !== 'string') {
        res = 'Ошибка!';
    } else {
        let arr = str.split('').reverse();

        for (let char of arr) {
            res += char;
        }
    }

    return res;
}

console.log(reverse(someString));
console.log(reverse(empty));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = "";

    if (arr.length === 0) {
        str = "Нет доступных валют";
    } else {
        str = "Доступные валюты:\n";

        arr.forEach(item => {
            if (item !== missingCurr) {
                str += `${item}\n`;
            }
        });
    }

    return str;
}

const empty1 = [];

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));
console.log(availableCurr(empty1, 'CNY'));


const shoppingMallData = {
    shops: [{
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let square = 0;
    let totalCosts = 0;
    let str = '';
    let { shops, height, moneyPer1m3, budget } = data;

    for (let shop of shops) {
        square += shop.width * shop.length;
    }

    totalCosts = square * height * moneyPer1m3;

    if (budget > totalCosts) {
        str = 'Бюджета достаточно';
    } else {
        str = 'Бюджета недостаточно';
    }

    return str;
}

console.log(isBudgetEnough(shoppingMallData));

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Zlatan'];

function sortStudentsByGroups(arr) {
    let sortedArr = arr.sort();
    let res = [];
    let str = 'Оставшиеся студенты:';
    ``

    for (let i = 0; i < Math.floor(sortedArr.length / 3); i++) {
        let subRes = [];
        for (let j = 0; j < 3; j++) {
            subRes.push(sortedArr[(i * 3) + j]);
        }
        res.push(subRes);
    }

    switch (sortedArr.length % 3) {
        case 1:
            str += ` ${sortedArr[sortedArr.length - 1]}`;
            break;
        case 2:
            str += ` ${sortedArr[sortedArr.length - 2]}, ${sortedArr[sortedArr.length - 1]}`;
            break;
        default:
            str += ' -';
            break;
    }

    res.push(str);

    return res;
}
console.log(Math.floor(students.length / 3));
console.log(sortStudentsByGroups(students));