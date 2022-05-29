'use strict';

const person = {
    name: 'Alex',
    age: 25,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    }
};
person.userAge = 30; //using setter don't need ()
console.log(person.userAge); //using getter don't need ()