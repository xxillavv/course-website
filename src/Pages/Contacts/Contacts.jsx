import map from '../../assets/main-images/info-map.jpg'
import { Header } from '../../components/header/Header'
import './Contacts.css'
import facebookLogo from '../../assets/icons/facebook-black.svg'
import twitterLogo from '../../assets/icons/twitter-black.svg'
import youtubeLogo from '../../assets/icons/youtube-black.svg'
import telegramLogo from '../../assets/icons/telegram-black.svg'
import linkedinLogo from '../../assets/icons/linkedin-black.svg'
import instagramLogo from '../../assets/icons/instagram-black.svg'
import contactsFormImage from '../../assets/main-images/contacts-form-image.svg'
import { Footer } from '../../components/Footer/Footer'

export const ContactsPage = () => {
  return (
    <>
      <Header />
      <section className="contacts-info">
        <div className="container">
          <div className="contacts-info__inner">
            <div className="contacts-info__left">
              <h6 className="contacts-info__left-subtitle">Contact info</h6>
              <h1 className="contacts-info__left-title">Get in touch</h1>
              <p className="contacts-info__left-talkus">Talk to us:</p>
              <p className="contacts-info__left-email">hello@createx.com</p>
              <p className="contacts-info__left-callus">Call us</p>
              <p className="contacts-info__left-phone">(405) 555-0128</p>
              <p className="contacts-info__left-address">Adress: </p>
              <p className="contacts-info__left-address-text">2464 Royal Ln. Mesa, New Jersey 45463, USA</p>
              <p className="contacts-info__left-follow">Follow us:</p>

              <ul className="contacts-info__left-list">
                <li className="contacts-info__left-list-item">
                  <a href="#" className="contacts-info__left-list-item-link">
                    <img src={facebookLogo} alt="Facebook" className="contacts-info__left-list-item-link-img" />
                  </a>
                </li>
                <li className="contacts-info__left-list-item">
                  <a href="#" className="contacts-info__left-list-item-link">
                    <img src={twitterLogo} alt="Twitter" className="contacts-info__left-list-item-link-img" />
                  </a>
                </li>
                <li className="contacts-info__left-list-item">
                  <a href="#" className="contacts-info__left-list-item-link">
                    <img src={youtubeLogo} alt="YouTube" className="contacts-info__left-list-item-link-img" />
                  </a>
                </li>
                <li className="contacts-info__left-list-item">
                  <a href="#" className="contacts-info__left-list-item-link">
                    <img src={telegramLogo} alt="Telegram" className="contacts-info__left-list-item-link-img" />
                  </a>
                </li>
                <li className="contacts-info__left-list-item">
                  <a href="#" className="contacts-info__left-list-item-link">
                    <img src={instagramLogo} alt="Instagram" className="contacts-info__left-list-item-link-img" />
                  </a>
                </li>
                <li className="contacts-info__left-list-item">
                  <a href="#" className="contacts-info__left-list-item-link">
                    <img src={linkedinLogo} alt="LinkedIn" className="contacts-info__left-list-item-link-img" />
                  </a>
                </li>
              </ul>

            </div>
            <img src={map} alt="Map" className='contacts-info__image' />
          </div>
        </div>
      </section>
      <section className="contacts-form">
        <div className="container">
          <div className="contacts-form__inner">
            <img src={contactsFormImage} alt="Girl" className='contacts-form__image' />
            <div className="contacts-form__right">
              <h6 className="contacts-form__right-subtitle">Any questions?</h6>
              <h1 className="contacts-form__right-title">Drop us a line</h1>
              <form className="contacts-form__right-form">
                <div className="contacts-form__right-form-information">
                  <div>
                    <label className='contacts-form__right-form-name-label' htmlFor='name'>First Name*</label>
                    <input id='name' className="contacts-form__right-form-name" placeholder='Your first name' />
                  </div>
                  <div>
                    <label className='contacts-form__right-form-lastname-label' htmlFor='lastname'>Last  Name*</label>
                    <input id='lastname' className="contacts-form__right-form-lastname" placeholder='Your last name' />
                  </div>
                </div>
                <div className="contacts-form__right-form-contacts">
                  <div>
                    <label className='contacts-form__right-form-email-label' htmlFor='email'>Email*</label>
                    <input id='email' className="contacts-form__right-form-email" placeholder='Your working email' />
                  </div>
                  <div>
                    <label className='contacts-form__right-form-phone-label' htmlFor='phone'>Phone</label>
                    <input id='phone' className="contacts-form__right-form-phone" placeholder='Your phone number' />
                  </div>
                </div>
                <div>
                  <label className='contacts-form__right-form-message-label' htmlFor='message'>Message*</label>
                  <input id='message' type="text" className="contacts-form__right-form-message" placeholder='Your message' />
                </div>
                <div className="contacts-form__right-form-submit">
                  <input type="checkbox" className="contacts-form__right-form-checkbox" />
                  <button className='contacts-form__right-form-button'>Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
