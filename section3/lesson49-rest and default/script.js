'use strict';
/* rest */

const log = function(a, b, ...rest) { //if we don't know how many args would take function in the future, use rest operator (...)
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage'); // rest operator gather rest args inot array

/* default */

function calcOrDouble(number, basis = 3) { //modern way to set default value
    // basis = basis || 3;//older way to set default value, not reliable
    console.log(number * basis);
}

calcOrDouble(3, 5);
calcOrDouble(6);