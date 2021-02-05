import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './state/state.js';
// const postsData = [
//   { id: 1, text: "Post1", countOfLikes: 10 },
//   { id: 2, text: "Post2", countOfLikes: 15 },
//   { id: 3, text: "Post3", countOfLikes: 11 },
//   { id: 4, text: "Post4", countOfLikes: 222 },
// ];

// const dialogsData = [
//   { id: 1, name: "Kirill" },
//   { id: 2, name: "Valera" },
//   { id: 3, name: "Maxim" },
// ];

// const messageData = [
//   { id: 1, message: "Hi" },
//   { id: 2, message: "How are you doing?" },
//   { id: 3, message: "YO" },
// ];

ReactDOM.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
