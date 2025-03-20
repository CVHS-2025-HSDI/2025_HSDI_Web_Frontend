import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './MainPage';
import axios from 'axios'

var backendDATA;
const apiCall = () => {
  return axios.get('http://localhost:3200').then((response) => {
    //this console.log will be in our frontend console
    
    return JSON.stringify(response.data);
    // 
    
  })
  
}
backendDATA=apiCall();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
