
import './App.css';

function Manager() {


  //JS goes here
  return (
    <div>
      <div class = "topnav">
        <a class = "active" href="#Home">Home </a>
        <a href="#Course Description">Course Description </a>
        <a href="#Classes ">Student Information</a>
        <input type = "text" placeholder = "Search.."/>
      </div>
      <button class="tablink" onclick="openPage('Student Information ', this, 'red')">Student Information</button>
      <button class="tablink" onclick="openPage('Student Transcripts', this, 'green')" id="defaultOpen">Student Transcripts</button>
      <button class="tablink" onclick="openPage('Course Requests', this, 'blue')">Course Requests</button>

<div id="Home" class="tabcontent">
  <h3>Home</h3>
  <p>Home is where the heart is..</p>
</div>

<div id="News" class="tabcontent">
  <h3>News</h3>
  <p>Some news this fine day!</p>
</div>

<div id="Contact" class="tabcontent">
  <h3>Contact</h3>
  <p>Get in touch, or swing by for a cup of coffee.</p>
</div>

<div id="About" class="tabcontent">
  <h3>About</h3>
  <p>Who we are and what we do.</p>
</div>
      {/*
      This is JS as well
      */}
    </div>
  );
}

export default Manager;
