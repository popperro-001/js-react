'use strict';

let sicret = Symbol('sicret');

const obj = {
    'name': 'Test',
    [Symbol('age')]: 30,//hidden property, not accessible by iterator
    [sicret]: 'password',
    getSicret: function() {
        return this[sicret];
    }
};

let id = Symbol('id');
let id2 = Symbol('id');

console.log(id == id2);
obj[id] = 1;

console.log(obj);

for(let value in obj) console.log(value);
console.log(obj.getSicret());
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);


const myAwesomeDataBase = {
    movies: [],
    actors: [],
    [Symbol('id')]: 124,
    [Symbol.for('global')]: 'Global'
};

myAwesomeDataBase.id = '333';

console.log(myAwesomeDataBase.id);
console.log(myAwesomeDataBase);
console.log(myAwesomeDataBase[Symbol.for('global')]);

