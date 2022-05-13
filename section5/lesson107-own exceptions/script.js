'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'square',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
];

try{
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);
    
        if(!blockObj.id) throw new SyntaxError(`in data at ${i + 1} no id`);
    
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
} catch(e) {
    if(e.name == 'SyntaxError') {
        console.error(e.name);
        console.error(e.message);
        console.error(e.stack);
    } else throw e;
}