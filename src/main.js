import React, { useRef } from 'react';
import './main.css'; // Import the CSS file

function Main() {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    // Restart the video when it ends
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="main-container">
      <div className="video-container">
        <div className="video-foreground">
          <iframe
            title="YouTube Video"
            src="https://www.youtube.com/embed/Ee7Wba4SfOw?autoplay=1&controls=0&showinfo=0&autohide=1&mute=1"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="content">
        <h1>Your Content Here</h1>
      </div>
      <video
        autoPlay
        muted
        onEnded={handleVideoEnd}
        style={{ display: 'none' }}
        ref={videoRef}
      >
        {/* A dummy video source, replace with an actual video file */}
        <source src="dummy-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Main;
