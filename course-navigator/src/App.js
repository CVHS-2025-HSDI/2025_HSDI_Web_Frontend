import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './MainPage';
import ClubDescription  from './ClubDescription';
import CourseDescription from './CourseDescription';
import CourseSchedule from './CourseSchedule';

function Course() {
  return (
    <Router>
      <Routes>
        <Route path = "/home" element={<MainPage/>}/>
        <Route path = "/CourseDescription" element={<CourseDescription/>}/>
        <Route path = "/ClubDescription" element={<ClubDescription/>}/>
        <Route path = "/CourseSchedule" element = {<CourseSchedule/>}/>
      </Routes>
    </Router>
  );
}

export default App
