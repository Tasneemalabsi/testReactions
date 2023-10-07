import React, { useRef } from 'react';
import './main.css'; 
import Header from './header';
import AboutImage from './about.png';
import './about.css';

function Main() {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    // Restart the video when it ends
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <>
    {/* // video  */}
      <div className="main-container">
        <div className="video-container">
          <div className="video-foreground">
            <video
              autoPlay
              muted
              loop
              onEnded={handleVideoEnd}
              ref={videoRef}
            >
              <source src={require('./main_video.mp4')} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="content">
          <h2>With more than 15 years of  </h2>
          <h3>online Car Rental market experience</h3>
          <h4>we guarantee value for money ! </h4>
        </div>
      </div>

      {/* // about us */}
      <section id="about-section">
        <div>
        <img id="about-img" src={AboutImage} alt="Logo" />
            {/* <img src="./about.png" alt="about_img" />  */}
        </div>
        <div id="about-content">
            <p id="about-word">About Us</p> 
            <hr />
            <p> Speed Car Rental is one of the largest car rental companies worldwide, available in the major airports in the world and operates more than 1,200 locations in more than 90 countries. Dollar Jordan one of the largest car rental offices in Jordan, we have in operations 2300 vehicles with all types and sizes, we do operate self-drive car rentals for short and long term also we do a leasing program and a chauffeur driven services. Our business mainly engaged in the business of the daily and yearly contracts for individuals, NGOs, embassies and US ARMY and German Army.</p>
            <button src="" > Rent Now</button>
        </div>
    </section>

    </>
  );
}

export default Main;
