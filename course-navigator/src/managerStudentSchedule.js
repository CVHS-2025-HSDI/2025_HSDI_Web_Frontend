
import './App.css';

function Manager() {


  //JS goes here
  return (
    <div>
      <div class = "topnav">
        <a class = "active" href="#Home">Home </a>
        <a href="#Course Description">Course Description </a>
        <a href="#Classes ">Student Schedules</a>
        <input type = "text" placeholder = "Search.."/>
      </div>
      <div class="row">
      <div class="leftcolumn">
      <h2>TITLE HEADING</h2>
      <p>Some text..</p>
    </div>
    <div class="rightcolumn">
      <h2>TITLE HEADING</h2>
      <p>Some text..</p>
    </div>
      <div class="column">
        <button>"Example Button"</button>
      </div>
      <div class="column">
        <button>"Example Button"</button>
      </div>
      <div class="column">
        <button>"Example Button"</button>
      </div>

      </div>
      {/*
      This is JS as well
      */}
    </div>
  );
}

export default Manager;
