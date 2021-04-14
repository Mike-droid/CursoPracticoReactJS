import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import HolaMundo from './components/HolaMundo'; //!No es necesario escribir la extensión
import Button from './components/Button';
import ButtonHooks from './components/ButtonHooks'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Button />
    <ButtonHooks />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
