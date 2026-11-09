import '../css/footer.css'
import logo3 from '../images/logowithoutbg.jpg'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { FaApple } from 'react-icons/fa'

function Footerr() {
  return (
    <>
      <footer className="ftr">
        {/* Left Section - Logo + Description + Social */}
        <div className="box-1">
          <div className="logo-section">
            <img src={logo3} alt="logo" className="logodesign" />
            <b>Epictrips</b>
          </div>

          <div className="content">
            <span>
              Crafting Unforgettable Journeys for Every
              Traveler, Tailored to Your Preferences, Interests,
              and Dream Destinations, Ensuring Every Detail is
              Perfect for an Exceptional Travel Experience
            </span>
          </div>

          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" className="social-icon" aria-label="X">
              <FaXTwitter />
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Support */}
        <div className="box-2">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Glamp FAQ</li>
            <li>Booking Policy</li>
            <li>Booking Guide</li>
            <li>Feedback</li>
          </ul>
        </div>

        {/* About Us */}
        <div className="box-2">
          <h4>About Us</h4>
          <ul>
            <li>About Us</li>
            <li>Our Story</li>
            <li>Journal</li>
            <li>Late News</li>
            <li>Site Map</li>
            <li>Partnerships</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="box-1 contact-box">
          <div className="hd">Contact Us</div>
          <div className="hd-2">Need help? 24/7</div>
          <div className="hd-3">001-1234-88888</div>

          <div className="email-row">
            <FaEnvelope className="email-icon" />
            <span className="hd-4">themeflat@gmail.com</span>
          </div>

          <div className="app-buttons">
            <a href="#" className="app-btn google-play">
              <IoLogoGooglePlaystore className="store-icon" />
              <div className="btn-text">
                <span className="small">GET IT ON</span>
                <span className="big">Google Play</span>
              </div>
            </a>

            <a href="#" className="app-btn app-store">
              <FaApple className="store-icon" />
              <div className="btn-text">
                <span className="small">Download on the</span>
                <span className="big">App Store</span>
              </div>
            </a>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="bottom-content">
          <p>©2024 Epictrips. All Rights Reserved.</p>
          <div className="bottom-links">
            <a href="#">Terms Of Services</a>
            <span>|</span>
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footerr