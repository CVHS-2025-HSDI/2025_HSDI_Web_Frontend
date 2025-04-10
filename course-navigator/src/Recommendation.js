import falconLogo from './falcon.png';
import accountIcon from './accountIcon.png';

var clubName1 = "Club Name 1";
var courseName1 = "Club Name 1";
import clubImage1 from './image.png';
import courseImage1 from './image.png';



import './Recommendation.css';
import React from 'react';

function Recommendation() {
  return (
    <div className="Recommendation">
      <div className="header">
        <img src={falconLogo} className="falcon" alt="falcon" />
        <h1>Crescenta Valley High School</h1>
        <img src={accountIcon} className="accountIcon" alt="accountIcon" />
        <button className = "Signinbutton">Sign In</button>
      </div>

vertical box: button, horbox of courses, horbox of clubs


      <div className="flex Recommendation-body"> 

        <button className="rec-button">Recommendation Quiz</button>


        <div className="row">
          <div className="col course">
            <h5>{courseName1}</h5>
            <img src={courseImage1} className="courseclub-pic" />
          </div>

          <div className="col course">
            <h5>{courseName1}</h5>
            <img src={courseImage1} className="courseclub-pic" />
          </div>

          <div className="col course">
            <h5>{courseName1}</h5>
            <img src={courseImage1} className="courseclub-pic" />
          </div>
        </div>


        <div className="row">
          <div className="col club">
            <h5>{clubName1}</h5>
            <img src={clubImage1} className="courseclub-pic" />
          </div>

          <div className="col club">
            <h5>{clubName1}</h5>
            <img src={clubImage1} className="courseclub-pic" />
          </div>

          <div className="col club">
            <h5>{clubName1}</h5>
            <img src={clubImage1} className="courseclub-pic" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Recommendation;
