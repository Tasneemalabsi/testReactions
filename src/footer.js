import React from 'react';
import './footer.css';
import BMWImage from './BMW.jpg';
import miniImage from './mini cooper.jpg';
import mercImage from './merc.jpg';
import audiImage from './audi.png';
import { useAuth0 } from '@auth0/auth0-react';



const Footer = () => {
  const { isAuthenticated } = useAuth0();
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h1><span>Spe</span>ed</h1>
                            <p>Receive pricing updates, shopping tips & more!.</p>
                            <div className="footer-icons">
                                <a href="https://www.facebook.com/profile.php?id=61551662804700&mibextid=ZbWKwL"  class="fa-brands fa-facebook"></a>
                                <a href="https://x.com/SpeedTourSprint?t=T829luwv2_uNOSl4Olhzaw&s=09" class="fa-brands fa-twitter"></a>
                                <a href="https://instagram.com/speedcar.mx?igshid=MmU2YjMzNjRlOQ==" class="fa-brands fa-instagram"></a>
                                <a href="https://www.linkedin.com/company/speed-cars62/" class="fa-brands fa-linkedin-in"></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/#about-section">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/#contact">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/cars">Car & Motorcycle</a>
                                </li>
                                {isAuthenticated && (
                                <li className="nav-item">
                                 <a className="cartt" href="/cart">
                                 <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="Cart Icon" />
                                 </a>
                                </li>
                                )}
                             
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>For questions about the Speed Cars Service please </h5>
                            <p><i class="fa-solid fa-phone-volume"></i> +962 778712927</p>
                            <p><i class="fa-solid fa-envelope"></i> speed.car.website@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i> Abbottabad, Pakistan.</p>
                        </div>
     <div className="col-sm-3">
            <div className="footer-widget">
              <h3><span>Our</span> Partners</h3>
              <div className="footer-widget-content">
                <div className="images-gallery">
                  <ul   class="partner-list">
                    <li>
                      <a href="https://www.bmw.com/en/index.html">
                        <img
                          src={BMWImage} // Replace with actual image URL
                          alt="BMW 01" height="40" loading="lazy"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.miniusa.com/">
                        <img
                           src={miniImage} // Replace with actual image URL
                           alt="mini 01" height="40" loading="lazy"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.mercedes-benz.com/en/">
                        <img
                           src={mercImage} // Replace with actual image URL
                           alt="BMW 01" height="40" loading="lazy"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.audi-jordan.com/me/web/joen.html?utm_source=google&utm_medium=search&utm_campaign=ao_search&utm_term=Brand&utm_content=JOR_PHD_sea_en_brand&csref=sea:PHD:Brand:ao_search:c:google:google:fn~top_of_page:c~search:mt~NA:id~rsa&gad_source=1&gclid=CjwKCAjwyY6pBhA9EiwAMzmfwcKFUiZbKiFdr-1s3OUo0--IaCt7mxejBK6dfBsZuTyW8GNgSsRYmBoCZGkQAvD_BwE&gclsrc=aw.ds">
                        <img
                            src={audiImage} // Replace with actual image URL
                            alt="BMW 01" height="40" loading="lazy"
                        />
                      </a>
                    </li>
                  
                  </ul>
                </div>
              </div>
            </div>
          </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
            <p>
                &copy; 2023 Speed.com. All rights reserved.
            </p>
            </div>
        </>
    )
}

export default Footer;