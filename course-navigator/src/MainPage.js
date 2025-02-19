import { useEffect, useState } from 'react';
import './MainPage.css';

function MainPage() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 3); // Cycle through 3 slides
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="MainPage">
        <img src="./logo.png" className="image3" />
      <div className="container">
      <div className = "header">
          
          <h1>Crescenta Valley High School</h1>
      </div>
      <button class = "Signinbutton">Sign In</button>
      <img src="./profileimage.png" className="profileimage"/>
      <div className="paragraphtext">
    <p>🎉✨ Welcome to Course Navigator! ✨🎉 🚀 Your school is full of amazing opportunities, and we’re here to help you find them! Whether you want to learn new things 📚, join exciting clubs 🎭⚽, or meet awesome friends, we’ve got you covered! 💡 Plus, real students share their experiences so you know exactly what to expect! 🤩 Never wonder: ❓ Is this class fun? ❓ Is this club worth it? ❓ Will I make new friends? We bring you real answers from real students! 🌟🏆 Start exploring now and make this your best school year ever! 🚀🎉</p>
      </div>


        {/* Background Image */}
        <img src="./Background.png" className="background" alt="Background" />
        {/* Slideshow Container */}
        <div className="slideshow-container">
          
          {[1, 2, 3].map((num, index) => (
            <div
              key={index}
              className={`mySlides ${slideIndex === index ? "fade active-slide" : ""}`}
            >
              <img src={`img${num}.png`} alt={`Slide ${num}`} style={{ width: '100%', height: '170%'}} />
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
