import { Link, useLocation } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'

import { SectionContext } from '../../App.js'
import { SignIn } from '../SignIn/SignIn.js'

import headerLogo from './../../assets/Header/logo.svg'

import './Header.css'

export const Header = () => {
  const sectionRef = useContext(SectionContext)
  const location = useLocation()

  const [openPopup, setOpenPopup] = useState<boolean>(false)

  useEffect(() => {
    if (openPopup) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [openPopup]) 

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
                  <Link to="/aboutus" className={location.pathname === "/aboutus" ? "header__navigation-link header-active" : "header__navigation-link"}>About Us</Link>
                </li>
                <li className="header__navigation-item">
                  <Link to="/courses" className={location.pathname === "/courses" ? "header__navigation-link header-active" : "header__navigation-link"}>Courses</Link>
                </li>
                <li className="header__navigation-item">
                  <Link to="/events" className={location.pathname === "/events" ? "header__navigation-link header-active" : "header__navigation-link"}>Events</Link>
                </li>
                <li className="header__navigation-item">
                  <Link to="/blog" className={location.pathname === "/blog" ? "header__navigation-link header-active" : "header__navigation-link"}>Blog</Link>
                </li>
                <li className="header__navigation-item">
                  <Link to="/contacts" className={location.pathname === "/contacts" ? "header__navigation-link header-active" : "header__navigation-link"}>Contacts</Link>
                </li>
              </ul>
            </div>
            <div className="header__right">
              <div className="header__right-navigation">
                <Link to="/contacts" className="header__right-consultation">Get consultation</Link>
                <button className="header__right-login" onClick={() => setOpenPopup(true)}>Log in / Register</button>
              </div>
            </div>
          </div>
        </div>
        {openPopup && <SignIn openMenu={setOpenPopup}/>}
      </header>
    </>
  )
}