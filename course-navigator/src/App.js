import React from 'react';
import GoogleSignIn from './GoogleLogin/GoogleSignIn';
import './App.css';
import axios from 'axios'
import { useState } from 'react';
function App(e) {
  
  const [username, setUsername] = useState('blah');
  const [password, setPassword] = useState('bleh');
  console.log("username:" +username)
  const handleSubmit = async(e) => {
    // e.preventDefault();
    const response = await axios.post('http://localhost:3200/Login', JSON.stringify({ username, password }));
    console.log(username, password)
  }
  return (
    <form onSubmit={handleSubmit}>

   
    <><img className="falcon " src="https://jacobpoole.net/tfalcon.png" alt="React Image"/>
      <div className="line"></div>
    <div className="App">
        <div className="input">
          <h2 className="title">Log In</h2>
          <textarea className="userInput" type = {username} placeholder="Username" value= {username} onChange={(e) => setUsername(e.target.value)}></textarea>
          <h2></h2>
          <textarea className="passinput" type = {password} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></textarea>
          <h2></h2>
          <button type= 'submit' className="login" onClick={(e) => handleSubmit(e)}>Log In</button>
        </div>
        {/* <GoogleSignIn /> */}
      </div></>
    </form>
  );
}

export default App;
