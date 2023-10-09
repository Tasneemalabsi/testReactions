import React, { useRef } from 'react';
import './main.css'; 
import AboutImage from './about.png';
import './about.css';
import './contact.css';
import { useEffect , useState } from 'react';
import emailjs from '@emailjs/browser';
import { BsFillCheckCircleFill } from 'react-icons/bs';


function Main() {
  const videoRef = useRef(null);
  const [mapUrl, setMapUrl] = useState(
    'https://maps.locationiq.com/v3/staticmap?key=pk.00c787dbb858e0b398fbb2f8efe16277&center=40.7128,-74.0060&zoom=16&size=600x400&format=png&maptype=roadmap'
  );
  const form = useRef();
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

  const handleVideoEnd = () => {
    // Restart the video when it ends
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  useEffect(function() {
    setMapUrl('https://maps.locationiq.com/v3/staticmap?key=pk.00c787dbb858e0b398fbb2f8efe16277&center=40.7128,-74.0060&zoom=16&size=600x400&format=png&maptype=roadmap')
  }, []);


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
      <section id="about-section" class="about-section">
  <div class="about-img-container">
    <img id="about-img" src={AboutImage} alt="Logo" />
  </div>
  <div id="about-content" class="about-content">
    <p id="about-word">About Us</p>
    <hr />
    <p>Speed Car Rental is one of the largest car rental companies worldwide, available in the major airports in the world and operates more than 1,200 locations in more than 90 countries. Dollar Jordan one of the largest car rental offices in Jordan, we have in operations 2300 vehicles with all types and sizes, we do operate self-drive car rentals for short and long term also we do a leasing program and a chauffeur driven services. Our business mainly engaged in the business of the daily and yearly contracts for individuals, NGOs, embassies and US ARMY and German Army.</p>
    <button src="">Rent Now</button>
  </div>
</section>

    {/* // contact us */}
    <section id="contact">
    
          {/* pk.00c787dbb858e0b398fbb2f8efe16277 */}
          <div id="location">
          <img src={mapUrl} alt="Static Map" />
          <p>Jordan , Amman , Airport Road P.O. Box 183334 </p>
         </div>
          
        
        <form id="contact-form" ref={form} onSubmit={sendEmail}>
        <p>Contact US</p> 
         <hr id="hr-contact"/>
          <label>Full Name: </label> <br />
          <input type="text" name="name" placeholder='Enter your full name' required/> <br /><br />
          <label>Email: </label> <br />
          <input type="email" name="email" placeholder='Enter your email' required/> <br /><br />
          <label>Mobile Number: </label> <br />
          <input type="text" name="phone" placeholder='Enter your mobile number' required/> <br /><br />
          {/* <label>Subject: </label> <br />
          <input type="text" placeholder='Enter the subject' required/> <br /><br /> */}
          <label>Message:</label> <br />
          <textarea name="message" cols="38" rows="4" placeholder="Enter the subject and your message"required></textarea> <br /><br />
          <button type="submit" value="Send">Submit</button>
        </form>
        
        {/* Success Message */}
        {isSuccessMessageVisible && (
          <div className="success-message">
            Message sent successfully <BsFillCheckCircleFill size={20} color="green" />
          </div>
        )}
    </section>
    </>
  );
}

export default Main;
