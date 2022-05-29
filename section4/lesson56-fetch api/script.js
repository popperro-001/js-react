'use strict';

/* fetch api uses promises, so we can use chaining .then */
fetch('https://jsonplaceholder.typicode.com/todos/1') //GET request
    .then(response => response.json()) //fetch has method json() which will parce JSON object to JS object and return as promise, just like JSON.parse...
    .then(json => console.log(json));


fetch('https://jsonplaceholder.typicode.com/posts', { //POST request
        method: "POST",
        body: JSON.stringify({
            name: 'Alex'
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(json => console.log(json));