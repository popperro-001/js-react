'use strict';
/* There are 2 queues of tasks macro and micro ,  between macro tasks will be executed micro task*/
setTimeout(() => console.log('macro task 1'));//macrotask

Promise.resolve()
    .then(() => console.log('micro task 1'));//microtask

queueMicrotask(() => console.log('wow'));

Promise.resolve()
    .then(() => console.log('micro task 2'));//microtask

console.log('macro task 2');//macrotask

//() => {} - macrotask
//microtsks: then/catch/finally/await
//render
//() => {} -macrotask
//microtsks: then/catch/finally/await
//render
//() => {} -macrotask