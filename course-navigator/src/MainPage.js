import { useEffect, useState } from 'react';
import './MainPage.css';
import axios from 'axios';

var backendDATA;
const apiCall = () => {
  return axios.get('http://localhost:3200/MainPage').then((response) => {
    //this console.log will be in our frontend console
    
    return JSON.stringify(response.data);
    // 
    
  })
  
};
backendDATA=apiCall();

function MainPage() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 10); // Cycle through 3 slides
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="MainPage">
      <div className="container">
      <div className = "header">

      <img src="./logo.png" className="image3" />
          <h1>Crescenta Valley High School</h1>
      </div>
      <button class = "profilebutton"></button>
      <button class = "Signinbutton">Sign In</button>
      <div>     
       <button class="courserecobutton">Course Recommendations</button>
       <button class="clubsbutton">Clubs</button>
       <button class="coursesbutton">Course List</button>
      </div>
      
      <img src="./profileimage.png" className="profileimage"/>
      
      <div className="paragraphtext">
          <p>
              <b>Welcome to Course Navigator!<br /></b>
              {backendDATA}
          </p>      
      </div>

      
        {/* Background Image */}
        <img src="./Background.png" className="background" alt="Background" />
        
        {/* Slideshow Container */}
        <div className="slideshow-container">
          
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, index) => (
            <div
              key={index}
              className={`mySlides ${slideIndex === index ? "fade active-slide" : ""}`}
            >
              <img src={`${num}.png`} alt={`Slide ${num}`} style={{ width: '100%', height: '170%'}} />
            </div>
          ))}
        </div>

        {/* Hump Image */}
        <img src="./hump.png" className="image2" alt="Hump" />
      </div>

      <script>
        
      </script>
    </div>
  );
}

export default MainPage;
