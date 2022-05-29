'use strict';

/* AJAX XMLHttpRequest legacy method */

const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json'); //gathers settings = method, url, async(default=true), login, password
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    /* request then gets response:
    1: status: code of response, ex. 200, 404
    2: statusText: string value of status, ex. OK, Not found
    3: response: what we get from server(backend) side, we can use it in client side
    4: readyState: current state of our request, ex. UNSET(O), OPENED(1), HEADERS_RECEIVED(2), LOADING(3), DONE(4)
     */

    /* 2 ways of hendling the request, readystatechange and load(more common) */
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);

            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Something went wrong';
        }
    });

    request.addEventListener('load', () => {
        if (request.status === 200) {

            const data = JSON.parse(request.response);

            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Something went wrong';
        }
    });

});