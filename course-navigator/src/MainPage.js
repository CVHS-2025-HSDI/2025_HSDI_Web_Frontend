import { useEffect, useState } from 'react';
import './MainPage.css';

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

       <a href="#ClubSearch">
               <button class="clubsbutton">Clubs</button>
       </a>
       <a href="#CourseDescription">
              <button class="courserecobutton">Course Recommendations</button>
       </a>
       
       <a href="#CourseSearch">
          <button class="coursesbutton">Course Search</button>
       </a>
      </div>
      
      <img src="./profileimage.png" className="profileimage"/>
      
      <div className="paragraphtext">
          <p1>
              <b>Welcome to Course Navigator!<br /></b>
              Explore the best classes, join exciting clubs, and connect with new friends all with real insights from students who’ve been there.
              Whether you're looking for challenging courses, creative outlets, or social experiences, we help you find the perfect fit.
              Get honest answers about academics, activities, and campus life so you know what to expect. Learn which classes are worth taking, which clubs match your interests, and how to make the most of your time at Crescenta Valley.
          </p1>      
      </div>

      
        {/* Background Image */}
        <img src=".Background.png" className="background" alt="Background" />
        
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
