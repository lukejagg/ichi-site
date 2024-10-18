import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';

import executeInDevMode from '@speckai/paige';
// executeInDevMode('http://localhost:8080/npm/script.js');

// Execute a fetch to 192.168.86.146:8080/npm/script.js and print the response
fetch('http://192.168.86.146:8080/npm/script.js')
  .then(response => response.text())
  .then(data => console.log(data));

executeInDevMode('192.168.86.146:8080/npm/script.js');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
