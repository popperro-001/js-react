'use strict';

class Rectange {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectange(10, 10);
const long = new Rectange(20, 100);

console.log(square.calcArea());
console.log(long.calcArea());

class ColoredRectangeWithText extends Rectange {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const div = new ColoredRectangeWithText(25, 10, 'Hello World', 'red');

div.showMyProps();
console.log(div.calcArea());