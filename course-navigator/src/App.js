import React from 'react';
import GoogleSignIn from './GoogleLogin/GoogleSignIn';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="input">
        <h2 className="username">Log In</h2>
        <textarea className="userInput" placeholder="Username"></textarea>
        <h2></h2>
        <textarea className="passinput" placeholder="Password"></textarea>
        <h2></h2>
        <button className="login">Log In</button>
      </div>
      <GoogleSignIn /> 
    </div>
  );
}

export default App;
