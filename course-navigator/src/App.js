import React from 'react';
import GoogleSignIn from './GoogleLogin/GoogleSignIn.js';
import './App.css';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import MainPage from './MainPage';
import ClubDescription  from './ClubDescription';
import CourseSchedule from './CourseSchedule';
import ClubSearch from './ClubSearch';

function App() {
  return (
    <div className="App">
      <div className="input">
    <Router>
      <Routes>
      <Route path="/" element={<Navigate replace to="home"/>}/>
        <Route path = "/home" element={<MainPage/>}/>
        <Route path = "/ClubSearch" element={<ClubSearch/>}/>
        <Route path = "/ClubDescription" element={<ClubDescription/>}/>
        <Route path = "/CourseSchedule" element = {<CourseSchedule/>}/>
        <Route path = "/LogIn" element = {<GoogleSignIn/>}/>
      </Routes>
    </Router>
      </div>
    </div>
    
  );
}

export default App
