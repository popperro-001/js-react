'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}


/* flags */
//writable, if true can change property
//enumerable, if true can be lopped
//configurable, if true can be deleted, attributes can be changed
console.log(Object.getOwnPropertyDescriptor(user, 'name')); //see flags of property 'name' of user object

Object.defineProperty(user, 'name', {writable: false});//will throw error if attemp to change property value

Object.defineProperty(user, 'gender', {value: 'male'});//if no flags specified, then all flags false by default
console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

Object.defineProperty(user, 'showMyPublicData', {enumerable: false});
for(let key in user) console.log(key);

console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

Object.defineProperties(user, {
    surname: {writable: false},
    name: {writable: true}
});

