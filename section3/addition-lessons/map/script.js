'use strict';

const user = {
    name: 'Pavel',
    surname: 'Pak',
    birthday: '20/04/2000',
    4: 'some digit',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`)
    }
};

console.log(user);
console.log(typeof(Object.keys(user)[3]));//property is string

/* use different data type (not string) as of property of the object, ex. another object, instead use Map */
const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 1500, 2500];

const map = new Map([
    [{paper: 400}, 8000],
    [{water: 20}, 700]
]);

// map.set(shops[0], 5000)
//     .set(shops[1], 100);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
});

console.log(map.get(shops[2]));

console.log(map.has(shops[1]));

console.log(map);

/* Map iterators */
const goods = [];
for(let shop of map.keys()) {
    goods.push(Object.keys(shop)[0]);
}
console.log(goods);

for(let price of map.values()) {
    console.log(price);
}

for(let [shop, price] of map.entries()) {
    console.log(shop, price);
}

map.forEach((value, key, map) => {
    console.log(key, value);
})

const userMap = new Map(Object.entries(user));
console.log(userMap);

const newUserObject = Object.fromEntries(userMap);
console.log(newUserObject);