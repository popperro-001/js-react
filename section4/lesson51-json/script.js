'use strict';

const person = {
    name: 'Alex',
    tel: '+744444'
};

console.log(JSON.stringify(person)); //convert into JSON object to send

console.log(JSON.parse(JSON.stringify(person))); //convert recieved JSON object to JS object

const persone = {
    name: 'Alex',
    tel: '+744444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone)); //deep copy of object with all included objects

clone.parents.mom = 'Ann';

console.log(persone);
console.log(clone);