'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    /* touchstart - event action on the moment of touching the element*/
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log("Start");
        // console.log(e.touches);
        console.log(e.targetTouches);
    });

    /* touchmove -  if we move, each shift would be an event action*/
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log("Move");
        console.log(e.targetTouches[0].pageX);
    });

    /* touchend - when we move finger from the element */
    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log("End");
    });

    /* touchenter - we move finger outside the element and the moment when we reach element */

    /* touchleave - when finger left the area of the element */

    /* touchcancel - our finger goes beyond the area of the browser */

    /* 3 main event properties:
    1: event.touches - get list of all current active fingers on the screen
    2: event.targetTouches - get list of all current active fingers on particular element
    3: event.changedTouches - get list of all fingers that act in particular event (include fingers that were already removed)*/

});