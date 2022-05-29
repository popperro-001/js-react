"use strict";

const usdRate = 28;
const eurRate = 33;
const discount = 0.9;

function convert(amount, rate) {
    return rate * amount;
}

function promotion(result) {
    console.log(result * discount);
}

convert(354, usdRate);
const res = convert(354, eurRate);
console.log(res);

promotion(convert(500, eurRate));