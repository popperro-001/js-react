'use strict';

/* async code using callback functions */
console.log('Data request...');

setTimeout(() => {
    console.log('Preparing data...');

    const product = {
        name: 'TV',
        price: 2000
    };

    setTimeout(() => {
        product.status = 'order';
        console.log(product);
    }, 2000);
}, 2000);

/* async code using promises */
console.log('Data request...');

const req = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data...');

        const product = {
            name: 'TV',
            price: 2000
        };

        resolve(product);
    }, 2000);
});

/* req.then((product) => {
    const req2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data is midifying...');
            product.status = 'order';
            resolve(product);
        }, 2000);
    });

    req2.then(data => {
        console.log('Data recieved');
        console.log(data);
    });
}); */

/* we don't have to create another promise(req2), instead we can return new promise and work with prev promise(req) using 2nd then */
req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data is midifying...');
            product.status = 'order';
            resolve(product);
            // reject();
        }, 2000);
    });
}).then(data => { //chaining(.then.then...)
    data.modify = true;
    return data;
}).then((item) => {
    console.log(item);
}).catch(() => { //usually put after all then to catch error
    console.error('Error...');
}).finally(() => { //this code will execute no matter the result: resolve or reject
    console.log('Final code...');
});


/* all() and race() */
const test = time => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(3000).then(() => console.log('3000 ms'));

Promise.all([test(1000), test(3000)]).then(() => {
    console.log('All');
}); //wait all promises results and only after will execute code inside

Promise.race([test(1000), test(3000)]).then(() => {
    console.log('Race');
}); //will execute code inside when at least 1 promise has result