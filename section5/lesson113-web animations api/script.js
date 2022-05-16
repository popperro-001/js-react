'use strict';

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelectorAll('img');

let phoneAnimation;

btnPhone.addEventListener('click', () => {
    if(!phoneAnimation){
        phoneAnimation = images[0].animate([//set keyframe: ex. starting, middle, ending points
        {
            transform: 'translateY(0) rotate(0deg)',//start
            filter: 'opacity(100%)'
        },
        {
            transform: 'translateY(100px) rotate(180deg)',//middle
            filter: 'opacity(50%)'
        },
        {
            transform: 'translateY(-100px) rotate(270deg)',//middle
            filter: 'opacity(75%)'
        },
        {
            transform: 'translateY(0) rotate(360deg)',//end
            filter: 'opacity(100%)'
        }
    ], {//settings like duartion and etc
        duration: 3000,
        iterations: Infinity
    });
    } else if (phoneAnimation.playState === 'paused'){
        phoneAnimation.play();
    } else {
        phoneAnimation.pause();
    }
});