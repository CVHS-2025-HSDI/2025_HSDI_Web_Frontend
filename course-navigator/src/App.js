import React from 'react';
import GoogleSignIn from './GoogleLogin/GoogleSignIn';
import './App.css';

function App() {
  return (
    <><img className="falcon " src="https://jacobpoole.net/tfalcon.png" alt="React Image"/>
      <div className="line"></div>
    <div className="App">
        <div className="input">
          <h2 className="title">Log In</h2>
          <textarea className="userInput" placeholder="Username"></textarea>
          <h2></h2>
          <textarea className="passinput" placeholder="Password"></textarea>
          <h2></h2>
          <button className="login">Log In</button>
        </div>
        <GoogleSignIn />
      </div></>
  );
}

export default App;
