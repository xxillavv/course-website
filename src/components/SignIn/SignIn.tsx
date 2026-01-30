import { SetStateAction, Dispatch } from 'react'

import facebookLogo from '../../assets/icons/facebook-signin.svg'
import googleLogo from '../../assets/icons/google-signin.svg'
import linkedinLogo from '../../assets/icons/linkedin-signin.svg'
import twitterLogo from '../../assets/icons/twitter-signin.svg'
import crossIcon from '../../assets/icons/cross-icon.svg'

type TOpenMenu = { openMenu: Dispatch<SetStateAction<boolean>> }

export const SignIn = ({ openMenu }: TOpenMenu) => {
  return (
    <section onClick={() => openMenu(false)} className="signin">
      <div onClick={(e) => e.stopPropagation()} className="signin__inner">
        <div className="signin__wrapper">
          <button className='signin__close-button' onClick={() => openMenu(false)}>
            <img src={crossIcon} alt="Cross" />
          </button>
          <div className="signin__top">
            <h3 className="signin__title">Sign up</h3>
            <p className="signin__subtitle">Registration takes less than a minute but gives you full control over your studying.</p>
            <form className='signin__form'>
              <label htmlFor="fullname__input" className="signin__form-fullname-label">
                Full Name
                <input placeholder="Your full name" type="text" id="fullname__input" />
              </label>
              <label htmlFor="email__input" className="signin__form-email-label">
                Email
                <input placeholder="Your working email" type="email" id="email__input" />
              </label>
              <label htmlFor="password__input" className="signin__form-password-label">
                Password
                <input placeholder="Enter password" type="password" id="password__input" />
              </label>
              <label htmlFor="confirm-password__input" className="signin__form-confirm-password-label">
                Confirm Password
                <input placeholder="Confirm password" type="password" id="confirm-password__input" />
              </label>
              <label htmlFor="signin__checkbox" className="signin__form-checkbox-label">
                <input type="checkbox" name="" id="signin__checkbox" />
                Remember me
              </label>
              <button className="signin__form-button">Sign up</button>
            </form>
            <div className="signin__box">
              <p className="signin__box-title">Already have an account?</p>
              <button className="signin__box-button">Sign In</button>
            </div>
          </div>
          <div className="signin__bottom">
            <p className="signin__bottom-text">Or sign in with</p>
            <div className="signin__bottom-image-box">
              <a href="#" className="signin__bottom-image-link">
                <img src={facebookLogo} alt="Facebook" className="signin__bottom-box-img" />
              </a>
              <a href="#" className="signin__bottom-image-link">
                <img src={googleLogo} alt="Google" className="signin__bottom-box-img" />
              </a>
              <a href="#" className="signin__bottom-image-link">
                <img src={twitterLogo} alt="Twitter" className="signin__bottom-box-img" />
              </a>
              <a href="#" className="signin__bottom-image-link">
                <img src={linkedinLogo} alt="LinkedIn" className="signin__bottom-box-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
