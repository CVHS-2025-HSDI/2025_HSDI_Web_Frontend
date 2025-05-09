import React from 'react';
import GoogleSignIn from './GoogleLogin/GoogleSignIn';
import './App.css';
import axios from 'axios'
import { useState } from 'react';
import {useNavigate} from 'react-router'

function SignUp(e) {
  const navigate = useNavigate();
  const goToMainPage = ()=>{
    navigate('/Login')
  }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('')
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const handleSubmit = async(e) => {
    e.preventDefault();
  
    const data = {
      user: username, 
      passwd: password,
      firstname: firstName,
      lastname: lastName,
      email: email,
    }
    console.log(data)
    const response = await axios.post('http://localhost:3200/SignUp', data).then(function(response){
      console.log(response.data)
      setResponse(response.data)
      if(response.data=='User Created'){
        goToMainPage()
      }
    });
  }
  return (
    <form onSubmit={handleSubmit}>
    <><img className="falcon " src="https://jacobpoole.net/tfalcon.png" alt="React Image"/>
      <div className="line"></div>
    <div className="App">
        <div className="input">
          <h2 className="title">Sign Up</h2>
          <input className="userInput" type = "text" name="firstname" placeholder="First Name" value= {firstName} onChange={(e) => setFirstName(e.target.value.replace(/\s/g, ''))}></input>
          <h2></h2>
          <input className="userInput" type = "text" name="lastname" placeholder="Last Name" value= {lastName} onChange={(e) => setLastName(e.target.value.replace(/\s/g, ''))}></input>
          <h2></h2>
          <input className="userInput" type = "text" name="email" placeholder="example@example.com" value= {email} onChange={(e) => setEmail(e.target.value.replace(/\s/g, ''))}></input>
          <h2></h2>
          <input className="userInput" type = "text" name="username" placeholder="Username" value= {username} onChange={(e) => setUsername(e.target.value.replace(/\s/g, ''))}></input>
          <h2></h2>
          <input className="passinput" type = "password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value.replace(/\s/g, ''))}></input>
          <h2></h2>
          <button type= 'submit' className="login" onClick={(e)=> handleSubmit(e)}>Sign Up</button>
          
        </div>
        <text className = 'message'>
            {response}
        </text>
        {/* <GoogleSignIn /> */}
      </div></>
    </form>
  );
}

export default SignUp;
