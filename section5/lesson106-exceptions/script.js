'use strict';
/* Theory */
try {
    console.log("Normal");
    console.log(a);
    console.log('Result');
} catch(e) {
    console.log(e.name);
    console.log(e.message);
    console.log(e.stack);
} finally {
    console.log('Will execute anyways');
}

console.log('Still normal');

/* Practice */
//for multipage app we can use try/catch to evade the exceptions of objects not found on particular page
try{
    document.querySelector('.active').addEventListener('click', () => {
        console.log('click');
    });
} catch(e) {
    console.log(e);
}