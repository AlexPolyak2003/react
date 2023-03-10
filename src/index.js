import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { useState } from 'react';


const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

