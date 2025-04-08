
import "./CourseSchedule.css";
import React, { useState } from "react";

function CourseSchedule() {  
  const [selectedSubjects, setSelectedSubjects] = useState({});
  const [selectedClasses, setSelectedClasses] = useState({});

  const subjectOptions = {
    Math: ["Algebra", "Geometry", "Calculus", "Statistics"],
    Science: ["Biology", "Chemistry", "Physics", "Environmental Science"],
    History: ["World History", "U.S. History", "European History", "Government"],
    English: ["Literature", "Composition", "Creative Writing", "Speech"],
    Elective: ["Journalism", "Drama", "Art", "Photography"],
    Languages: ["Spanish", "Korean", "German", "Chinese"]
  };

  const handleSubjectChange = (period, event) => {
    const subject = event.target.value;
    setSelectedSubjects({ ...selectedSubjects, [period]: subject });
    setSelectedClasses({ ...selectedClasses, [period]: "" }); // Reset class when subject changes
  };
  
  const handleClassChange = (period, event) => {
    setSelectedClasses({ ...selectedClasses, [period]: event.target.value });
  };
  
  const periods = [1, 2, 3, 4, 5, 6];
  const subjects = Object.keys(subjectOptions);

  return (
    <div>
      <img className="falcon" src="https://jacobpoole.net/tfalcon.png" alt="Falcon" />
      <img className="person" src="https://www.freeiconspng.com/uploads/clipart--person-icon--cliparts-15.png" alt="Person Icon" />
      <button className="logIn">Log In</button>
      <button className="signUp">Sign Up</button>

      <div className="line"></div>
      <div className="head">
        <h1>Schedule and Planning</h1>
        <div className="rectangle">
          <div className="line0">
            <h1 className="StuID">Student Name (stu ID) - Grade</h1>
          </div>

          {periods.map((period) => (
            <div key={period} className={`line${period}`}>
              <h1 className="Period">Period {period}:</h1>

              <div className="addClass">
                🏫
                <select
                  className="classDropdown"
                  value={selectedSubjects[period] || ""}
                  onChange={(event) => handleSubjectChange(period, event)}
                >
                  <option value="">Select a subject</option>
                  {subjects.map((subject, index) => (
                    <option key={index} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              {selectedSubjects[period] && (
                <div className="addClass">
                  🏫
                  <select
                    className="classDropdown"
                    value={selectedClasses[period] || ""}
                    onChange={(event) => handleClassChange(period, event)}
                  >
                    <option value="">Select a class</option>
                    {subjectOptions[selectedSubjects[period]].map((course, index) => (
                      <option key={index} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
import React, { useState } from 'react';
import styles from './CourseSchedule.css';
function CourseSchedule(){  
    return (
      <body>
        <a href="#home">
        <img className = "falcon1"src = "https://jacobpoole.net/tfalcon.png" alt = "React Image"/>
        </a>
        <img className = "person1" src = "https://www.freeiconspng.com/uploads/clipart--person-icon--cliparts-15.png" alt = "React Image 2"/>
        <button className = "Loggingin">
              Log In
          </button>
          <button className = "Signingup">
              Sign Up 
          </button>
          <button>

          </button>
        <div className = "line"></div>
      <div className = "heading">
        <h1>Schedule and Planning</h1>
        <div className = "rectangle">
            <p>
            aewsfdxgchvjbLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            </p>
          <div className = "line1"></div>
          <div className = "line2"></div>
          <div className = "line3"></div>
          <div className = "line4"></div>
          <div className = "line5"></div>
          <div className = "line6"></div>
        </div>
      </div>
      <p>
    
      </p>

      </body>
      

          
        
      
      
    );
}
export default CourseSchedule;