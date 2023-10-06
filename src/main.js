import React, { useRef } from 'react';
import './main.css'; 


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
            <source src={require('./Alfa Romeo _Feel For Yourself_ _ Unreal Engine 5 Cinematic.mp4')} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="content">
        <h1>Your Content Here</h1>
      </div>
    </div>
  );
}

export default Main;
