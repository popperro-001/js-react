import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';


// const elem = <h2>Hello World!</h2>;//JSX

// const elem = React.createElement('h2', {className: 'greeting'}, 'Bye bye World!');//JS

const text = 'Bye bye World'

const elem = (
  <div>
    <h2>{text}</h2>
    <input type="text" />
    <button>Click</button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

