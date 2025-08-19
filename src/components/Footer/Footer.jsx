import './Footer.css'
import logo from '../../assets/logos/footer-logo.svg'
import arrowRight from '../../assets/icons/arrow-right-white.svg'
import telegramLogo from '../../assets/logos/telegram-logo.svg'
import linkedinLogo from '../../assets/logos/linkedin-logo.svg'
import instagramLogo from '../../assets/logos/instagram-logo.svg'
import youtubeLogo from '../../assets/logos/youtube-logo.svg'
import facebookLogo from '../../assets/logos/facebook-logo.svg'
import twitterLogo from '../../assets/logos/twitter-logo.svg'
import { useContext } from 'react'
import { SectionContext } from '../../Pages/Main/Main'

export const Footer = () => {
  const sectionRef = useContext(SectionContext)

  const moveToHeader = () => {
    sectionRef.current.scrollIntoView()
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            <a href="#" className="footer__left-logo-link">
              <img src={logo} alt="Footer logo" className="footer__left-logo" />
            </a>
            <p className="footer__left-about">Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country. </p>
            <ul className="footer__left-list">
              <li className="footer__left-list-item">
                <a href="#" className="footer__left-list-item-link">
                  <img src={facebookLogo} alt="Facebook" className="footer__left-list-item-link-img" />
                </a>
              </li>
              <li className="footer__left-list-item">
                <a href="#" className="footer__left-list-item-link">
                  <img src={twitterLogo} alt="Twitter" className="footer__left-list-item-link-img" />
                </a>
              </li>
              <li className="footer__left-list-item">
                <a href="#" className="footer__left-list-item-link">
                  <img src={youtubeLogo} alt="YouTube" className="footer__left-list-item-link-img" />
                </a>
              </li>
              <li className="footer__left-list-item">
                <a href="#" className="footer__left-list-item-link">
                  <img src={telegramLogo} alt="Telegram" className="footer__left-list-item-link-img" />
                </a>
              </li>
              <li className="footer__left-list-item">
                <a href="#" className="footer__left-list-item-link">
                  <img src={instagramLogo} alt="Instagram" className="footer__left-list-item-link-img" />
                </a>
              </li>
              <li className="footer__left-list-item">
                <a href="#" className="footer__left-list-item-link">
                  <img src={linkedinLogo} alt="LinkedIn" className="footer__left-list-item-link-img" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__map">
            <h6 className="footer__map-title">SITE MAP</h6>
            <ul className="footer__map-list">
              <li className="footer__map-list-item">
                <a href="#" className="footer__map-list-item-link">About Us</a>
              </li>
              <li className="footer__map-list-item">
                <a href="#" className="footer__map-list-item-link">Courses</a>
              </li>
              <li className="footer__map-list-item">
                <a href="#" className="footer__map-list-item-link">Events</a>
              </li>
              <li className="footer__map-list-item">
                <a href="#" className="footer__map-list-item-link">Blog</a>
              </li>
              <li className="footer__map-list-item">
                <a href="#" className="footer__map-list-item-link">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="footer__courses">
            <h6 className="footer__courses-title">COURSES</h6>
            <ul className="footer__courses-list">
              <li className="footer__courses-list-item">
                <a href="#" className="footer__coutses-list-item-link">Marketing</a>
              </li>
              <li className="footer__courses-list-item">
                <a href="#" className="footer__coutses-list-item-link">Management</a>
              </li>
              <li className="footer__courses-list-item">
                <a href="#" className="footer__coutses-list-item-link">HR & Recruting</a>
              </li>
              <li className="footer__courses-list-item">
                <a href="#" className="footer__coutses-list-item-link">Design</a>
              </li>
              <li className="footer__courses-list-item">
                <a href="#" className="footer__coutses-list-item-link">Development</a>
              </li>
            </ul>
          </div>
          <div className="footer__contact">
            <h6 className="footer__contact-title">CONTACT US</h6>
            <p className="footer__contacts-phone">(405) 555-0128</p>
            <p className="footer__contacts-email">hello@createx.com</p>
          </div>
          <div className="footer__signup">
            <h6 className="footer__signup-title">SIGN UP TO OUR NEWSLETTER</h6>
            <input type="text" placeholder='Email address' className="footer__signup-input" />
            <button className="footer__signup-button">
              <img src={arrowRight} alt="Button" className="footer__signup-button-image" />
            </button>
            <p className="footer__signup-text">*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <div className="footer__bottom-left">
              <p className="footer__bottom-left-text">© All rights reserved. Made with</p>
              <p className="footer__bottom-left-bytext">by Createx Studio </p>
            </div>
            <button onClick={moveToHeader} className="footer__bottom-link">GO TO TOP</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
