import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
import NewsState from './context/NewsState';

ReactDOM.render(
  <NewsState>
    <App />
  </NewsState>,
  document.getElementById('root')
);
