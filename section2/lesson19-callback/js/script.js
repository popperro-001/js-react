"use strict";

function first() {
    //Do something
    setTimeout(function() {
        console.log("First function");
    }, 500);
}

function second() {
    console.log("Second function");
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I study ${lang}`);
    callback();
}

function done() {
    console.log("I have completed this class");
}

learnJS("javascript", done);


/* learnJS("javascript", function(){
    console.log("I have completed this class");
}); */