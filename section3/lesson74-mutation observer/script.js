'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver(mutationRecords => { //create observe object
    console.log(mutationRecords);
});

observer.observe(box, { //observe for box element and observe particular actions
    childList: true
});

observer.disconnect(); //stop observer work