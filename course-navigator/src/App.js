import './App.css';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import MainPage from './MainPage';
import ClubDescription  from './ClubDescription';
import CourseDescription from './CourseDescription';
import CourseSchedule from './CourseSchedule';
import ClubSearch from './ClubSearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. HELLO bob is my uncle
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <Router>
      <Routes>
      <Route path="/" element={<Navigate replace to="home"/>}/>
        <Route path = "/home" element={<MainPage/>}/>
        <Route path = "/ClubSearch" element={<ClubSearch/>}/>
        <Route path = "/CourseDescription" element={<CourseDescription/>}/>
        <Route path = "/ClubDescription" element={<ClubDescription/>}/>
        <Route path = "/CourseSchedule" element = {<CourseSchedule/>}/>
      </Routes>
    </Router>
  );
}

export default App
