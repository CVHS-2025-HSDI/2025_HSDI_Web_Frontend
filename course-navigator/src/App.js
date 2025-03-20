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
