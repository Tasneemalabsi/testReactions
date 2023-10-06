import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="footer-widget">
              <h3>Stay in touch</h3>
              <div className="footer-widget-content">
                <a href="mailto:sales@example.com" className="contact-link">
                  sales@example.com
                </a>
                <a
                  href="mailto:support@example.com"
                  className="contact-link red"
                >
                  support@example.com
                </a>
                <a href="tel:0121234" className="contact-link">
                  (123) 456-789
                </a>
                <div className="footer-social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-rss"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="footer-widget">
              <h3>Latest Events</h3>
              <div className="footer-widget-content">
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <img
                        className="media-object"
                        src="http://placehold.it/60x60" // Replace with actual image URL
                        alt="Event 1"
                      />
                    </a>
                  </div>
                  <div className="media-body">
                    <p>
                      <a href="#">Event 1</a>
                    </p>
                    <span>September 30, 2016</span>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <img
                        className="media-object"
                        src="http://placehold.it/60x60" // Replace with actual image URL
                        alt="Event 2"
                      />
                    </a>
                  </div>
                  <div className="media-body">
                    <p>
                      <a href="#">Event 2</a>
                    </p>
                    <span>September 30, 2016</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="footer-widget">
              <h3>Opening Hour</h3>
              <div className="footer-widget-content">
                <div className="open-time">
                  <ul className="opening-time">
                    <li>
                      <span>
                        <i className="fa fa-times"></i>
                      </span>
                      <p className="clock-time">
                        <strong>Monday:</strong> Closed
                      </p>
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-check"></i>
                      </span>
                      <p>
                        <strong>Tue-Fri:</strong> 8am - 12am
                      </p>
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-check"></i>
                      </span>
                      <p>
                        <strong>Sat-Sun:</strong> 7am - 1am
                      </p>
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-check"></i>
                      </span>
                      <p>
                        <strong>Holidays:</strong> 12pm-12am
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="footer-widget">
              <h3>Latest Events</h3>
              <div className="footer-widget-content">
                <div className="images-gallery">
                  <ul>
                    <li>
                      <a href="#">
                        <img
                          src="http://placehold.it/85x85" // Replace with actual image URL
                          alt="Instagram 01"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="http://placehold.it/85x85" // Replace with actual image URL
                          alt="Instagram 02"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="http://placehold.it/85x85" // Replace with actual image URL
                          alt="Instagram 03"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="http://placehold.it/85x85" // Replace with actual image URL
                          alt="Instagram 04"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="http://placehold.it/85x85" // Replace with actual image URL
                          alt="Instagram 05"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="http://placehold.it/85x85" // Replace with actual image URL
                          alt="Instagram 06"
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
    </footer>
  );
}
export default Footer;