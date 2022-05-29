/* setTimeout() sets delay interval for function to be called. 1st arg function, 2nd time for delay in ms, 3rd arg is a arg of 1st function if it is necessary */
const btn = document.querySelector('.btn'),
    btn2 = document.querySelector('.btn2');

const timerId = setTimeout(function(text) {
    console.log(text);
}, 2000, 'Hello');

clearInterval(timerId); //breaks the setTimeout function

let timerId2,
    i = 0;

btn.addEventListener('click', () => {
    // timerId2 = setTimeout(logger, 3000);
    timerId2 = setInterval(logger, 3000); //will repeat calling function with set interval in ms
});

function logger() {
    if (i === 3) {
        clearInterval(timerId2); //if we put break function in line with the event listener it won't be called because we don't know when exactly occur the event. thus we need to put it inside the called function
    }
    alert("Logger");
    i++;
    console.log(i);
}

let id = setTimeout(function log() {
    console.log('Privet');
    id = setTimeout(log, 5000); //we can use recursive function instead of setInterval, thus we can be sure that timer would work correctly. with setInterval we can't be sure of other function breaks the repetition, if stop function did not work, the repeat function would go by its own
}, 5000);

clearInterval(id);

/* Practice */

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) { //box with 100x100 sides would reach wrapper of 400x400 after it went 300px
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn2.addEventListener('click', myAnimation);