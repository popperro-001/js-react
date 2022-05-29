/* Task: write a parser (general architecture)
    Subtask: parser parse all H1/2/3/... headers from the page (use if condition)
*/
window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    let necessaryNodes = [];

    function recursy(element) { //using this function we can go through entire DOM tree till the last child of each node
        element.childNodes.forEach(node => {
            // if (node.nodeName === '#text') { //get rid off all #text nodes (empty) and get anly valuable nodes
            if (node.nodeName.match(/^H\d/)) { //if we want to find tags starting with H and some digit after (ex H1, H2, H3 and so on)
                const obj = { //prepare object for JSON format
                    header: node.nodeName,
                    content: node.textContent
                };
                necessaryNodes.push(obj); //gather all necessary data into array
            } else {
                recursy(node); //get only tags
            }
        });
    }

    recursy(body);

    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(necessaryNodes) //convert array to JSON and send it to the server
        })
        .then(response => response.json()) //fetch returns promise, we use json() to read it in JSON format
        .then(json => console.log(json));

});