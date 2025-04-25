import './Quiz.css';
import React from 'react';
import falconLogo from './falcon.png';
import accountIcon from './accountIcon.png';

// put array of question strings here
// also put array of arrays of answer choices here
function nextQuestion() {
  // replace question w new question, replace choices w new choices
  // return 2;
}
function Quiz() {
  // document.getElementById("choice1").addEventListener("click",nextQuestion);
  // document.getElementById("choice2").addEventListener("click",nextQuestion);
  // document.getElementById("choice3").addEventListener("click",nextQuestion);
  // document.getElementById("choice4").addEventListener("click",nextQuestion);


  return (
    <div className="Quiz">
      <div className="header">
        <img src={falconLogo} className="falcon" alt="falcon" />
        <h1>Crescenta Valley High School</h1>
        <img src={accountIcon} className="accountIcon" alt="accountIcon" />
        <button className = "Signinbutton">Sign In</button>
      </div>

    {/* i guess show these at the beginning and replace it w the questionbox once the begin button is clicked */}
    {/* <h2>Your Recommendation Quiz!</h2> */}
    {/* <button className="beginQuizButton">click to begin</button> */}

      <div className="questionBox">
        <p className="question">What blah blah blah?</p>
        <div className="choicesBox">
          <div className="row">
            <button id="choice1" className="choiceButton">choice1</button>
            <button id="choice2" className="choiceButton">choice2</button>
          </div>
          <div className="row">
            <button id="choice3" className="choiceButton">choice3</button>
            <button id="choice4" className="choiceButton">choice4</button>
          </div>
          
        </div>
      </div>

    </div> 

   );
}  

export default Quiz;
