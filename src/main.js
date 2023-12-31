import React, { useRef } from 'react';
import './main.css';
import AboutImage from './about.png';
import './about.css';
import './contact.css';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';



function Main() {
  const videoRef = useRef(null);
  const [mapUrl, setMapUrl] = useState('');
  const form = useRef();
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

  useEffect(() => {
    let fetchAPI = async () => {
      let url =
        'https://maps.locationiq.com/v3/staticmap?key=pk.00c787dbb858e0b398fbb2f8efe16277&center=31.963158,35.930359&zoom=13&format=jpg';
      try {
        let response = await fetch(url);
        let blob = await response.blob();
        let mapImageUrl = URL.createObjectURL(blob);
        setMapUrl(mapImageUrl);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAPI();
  }, []);

  const handleVideoEnd = () => {
    // Restart the video when it ends
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  // useEffect(function() {
  //   setMapUrl('https://tiles.locationiq.com/v3/streets/vector.json?key=pk.00c787dbb858e0b398fbb2f8efe16277')
  // }, []);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zajgd2p', 'template_vme268o', form.current, 'aP6jMuiuKmo651aic')
      .then((result) => {
        console.log(result.text);
        console.log("msg sent successfuly");
        e.target.reset()
        // Show the success message for 5 seconds
        setIsSuccessMessageVisible(true);
        setTimeout(() => {
          setIsSuccessMessageVisible(false);
        }, 5000);
      },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {/* // video  */}
      <>
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

              <div className="video-text">
                <h1>Your Guide To Buying</h1>
                <h1>Online With <span style={{ color: " #cc0000" }}>Speed</span></h1>
                <p> a new easy and convenient way to buy your new car anytime and anywhere ! </p>


              
              </div>

            </div>
          </div>
        </div>


        {/* // about us */}
        <section id="about-section" class="about-section">
          <div class="about-img-container">
            <img id="about-img" src={AboutImage} alt="Logo" />
          </div>
          <div id="about-content" class="about-content">
            <p id="about-word">About Us</p>
            <hr />
            <p>Speed Car Rental is one of the largest car rental companies worldwide, available in the major airports in the world and operates more than 1,200 locations in more than 90 countries. Dollar Jordan one of the largest car rental offices in Jordan, we have in operations 2300 vehicles with all types and sizes, we do operate self-drive car rentals for short and long term also we do a leasing program and a chauffeur driven services. Our business mainly engaged in the business of the daily and yearly contracts for individuals, NGOs, embassies and US ARMY and German Army.</p>
     <Link to="/cars">      <button src="">Book Now</button></Link> 
          </div>
        </section>

        {/* // contact us */}
        <section id="contact">

          {/* pk.00c787dbb858e0b398fbb2f8efe16277 */}
          <div id="location">
            <img src={mapUrl} alt="dynamic Map" />
            <p>Jordan , Amman , Airport Road P.O. Box 183334 </p>
          </div>


          <form id="contact-form" ref={form} onSubmit={sendEmail}>
            <p>Contact US</p>
            <hr id="hr-contact" />
            <label>Full Name: </label> <br />
            <input type="text" name="name" placeholder='Enter your full name' required /> <br /><br />
            <label>Email: </label> <br />
            <input type="email" name="email" placeholder='Enter your email' required /> <br /><br />
            <label>Mobile Number: </label> <br />
            <input type="text" name="phone" placeholder='Enter your mobile number' required /> <br /><br />
            {/* <label>Subject: </label> <br />
          <input type="text" placeholder='Enter the subject' required/> <br /><br /> */}
            <label>Message:</label> <br />
            <textarea name="message" cols="38" rows="4" placeholder="Enter the subject and your message" required></textarea> <br /><br />

            <div className="button-container">
              <button type="submit" value="Send" style={{ borderRadius: '20px' }}>Submit</button>
              {/* Success Message */}
              {isSuccessMessageVisible && (
                <div className="success-message">
                  Message sent successfully <BsFillCheckCircleFill size={20} color="green" />
                </div>
              )}
            </div>
          </form>


        </section>
      </>
    </>
  );
}

export default Main;
