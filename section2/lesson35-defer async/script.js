'use strict';

const p = document.querySelectorAll('p');

console.log(p);

/* we can put script from js */


function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false; //disable default behavior of the dynamic scripts
    document.body.append(script);
}

/* we set exact order of script load */
loadScript("test2.js");
loadScript("some.js");