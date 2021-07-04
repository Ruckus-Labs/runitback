import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import VanillaTilt from 'vanilla-tilt';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

VanillaTilt.init(document.querySelectorAll(".shots-grid .container .image-container"));
console.log(document.querySelectorAll('.shots-grid .container .image-container'));