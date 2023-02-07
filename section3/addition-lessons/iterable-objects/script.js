'use strict';

const user = {
    name: 'Pavel',
    surname: 'Pak',
    birthday: '30/04/1999',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

const arr = ['b', 'a', 'c'];

const str = 'Hello, world!';

/* for ... in */
//can iterate in unusual order, may be important for arrays or strings
for(const key in user) console.log(user[key]);

for(const key in arr) console.log(arr[key]);//not recommended

for(const key in str) console.log(str[key]);//not recommended

/* for ... of */
//return value of the object in key
//Object is not iterable object

for(const key of arr) console.log(key);

for(const key of str) console.log(key);

/* convert object to iterable object */
//make own iterator
const salaries ={
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function() {
        console.log('Hello');
    }
};

salaries[Symbol.iterator] = function() {
    return {
        current: this.john,
        last: this.ann,
        next() {
            if(this.current < this.last) {
                this.current = this.current + 500;
                return {done: false, value: this.current};
            } else {
                return {done: true};
            }            
        }
    };
};

for (let res of salaries) console.log(res);

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());