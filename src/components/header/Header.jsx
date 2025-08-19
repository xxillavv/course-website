import headerLogo from './../../assets/Header/logo.svg'
import './Header.css'
import { Link } from 'react-router-dom'

export const Header = ({sectionRef}) => {
  return (
    <>
      <header ref={sectionRef} id='header' className="header">
        <div className="container">
          <div className="header__inner">
            <div className="header__left">
              <Link to="/" className="header__logo-link">
                <img src={headerLogo} alt="Header logo" className="header__logo-image" />
              </Link>
              <ul className="header__navigation">
                <li className="header__navigation-item">
                  <a href="#" className="header__navigation-link">About Us</a>
                </li>
                <li className="header__navigation-item">
                  <a href="#" className="header__navigation-link">Courses</a>
                </li>
                <li className="header__navigation-item">
                  <a href="#" className="header__navigation-link">Events</a>
                </li>
                <li className="header__navigation-item">
                  <a href="#" className="header__navigation-link">Blog</a>
                </li>
                <li className="header__navigation-item">
                  <Link to="/contacts" className="header__navigation-link">Contacts</Link>
                </li>
              </ul>
            </div>
            <div className="header__right">
              <div className="header__right-navigation">
                <a href="#" className="header__right-consultation">Get consultation</a>
                <a href="#" className="header__right-login">Log in / Register</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}