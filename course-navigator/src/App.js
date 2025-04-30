import React from 'react';
import GoogleSignIn from './GoogleLogin/GoogleSignIn';
import './App.css';
import axios from 'axios'
import { useState } from 'react';
function App(e) {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('')
  const [maskedPassword, setMaskedPassword] = useState('')
  const handleSubmit = async(e) => {
    e.preventDefault();
  
    const data = {
      user: username, 
      passwd: password
    }
    console.log(data)
    const response = await axios.post('http://localhost:3200/Login', data).then(function(response){
      console.log(response.data)
      setResponse(response.data)
    });
  }
  return (
    <form onSubmit={handleSubmit}>
    <><img className="falcon " src="https://jacobpoole.net/tfalcon.png" alt="React Image"/>
      <div className="line"></div>
    <div className="App">
        <div className="input">
          <h2 className="title">Log In</h2>
          <input className="userInput" type = {username} name="username" placeholder="Username" value= {username} onChange={(e) => setUsername(e.target.value)}></input>
          <h2></h2>
          <input className="passinput" type = "password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <h2></h2>
          <button type= 'submit' className="login" onClick={(e)=> handleSubmit(e)}>Log In</button>
          
        </div>
        <text className = 'message'>
            {response}
        </text>
        <GoogleSignIn />
      </div></>
    </form>
  );
}

export default App;
