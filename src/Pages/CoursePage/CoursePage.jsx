import { useState } from "react"
import { Header } from "../../components/Header/Header"
import './CoursePage.css'
import { coursePageMembersData } from "../../data"
import { CoursesItemMembers } from "./CoursePageMembers"
import { Certificate } from '../../components/Certificate/Certificate'
import { Subscribe } from '../../components/Subscribe/Subscribe'
import { Footer } from '../../components/Footer/Footer'
import { Testimonals } from "../../components/Team/Testimonals"

export const CoursePage = () => {
  const [active, setActive] = useState(null)

  const activeButton = (index) => {
    setActive(index)
  }

  return (
    <>
      <Header />
      <section className="about__courses">
        <div className="container">
          <div className="about__courses-inner">
            <h6 className="about__courses-subtitle">Enjoy your studying!</h6>
            <h1 className="about__courses-title">Our online courses</h1>
            <nav className="about__courses-navigation">
              <ul className="about__courses-nav-list">
                <li className="about__courses-nav-list-item">
                  <button onClick={() => activeButton(1)} className={1 === active ? 'about__courses-nav-list-button active' : 'about__courses-nav-list-button'}>All</button>
                </li>
                <li className="about__courses-nav-list-item">
                  <button onClick={() => activeButton(2)} className={2 === active ? 'about__courses-nav-list-button active' : 'about__courses-nav-list-button'}>Marketing</button>
                </li>
                <li className="about__courses-nav-list-item">
                  <button onClick={() => activeButton(3)} className={3 === active ? 'about__courses-nav-list-button active' : 'about__courses-nav-list-button'}>Management</button>
                </li>
                <li className="about__courses-nav-list-item">
                  <button onClick={() => activeButton(4)} className={4 === active ? 'about__courses-nav-list-button active' : 'about__courses-nav-list-button'}>HR & Recruting</button>
                </li>
                <li className="about__courses-nav-list-item">
                  <button onClick={() => activeButton(5)} className={5 === active ? 'about__courses-nav-list-button active' : 'about__courses-nav-list-button'}>Design</button>
                </li>
                <li className="about__courses-nav-list-item">
                  <button onClick={() => activeButton(6)} className={6 === active ? 'about__courses-nav-list-button active' : 'about__courses-nav-list-button'}>Development</button>
                </li>
              </ul>
              <label className="about__courses-nav-label" htmlFor="search-course">
                <input id="search-course" type="text" placeholder="Search course..." className="about__courses-nav-input" />
              </label>
            </nav>
            <div className="about__courses-box">
              {coursePageMembersData.map((el, index) => {
                return <CoursesItemMembers key={index} courseData={el} />
              })}
              <button className="about__courses-load-button">Load more</button>
            </div>
          </div>
        </div>
        <div className="about__courses-testimonals">
          <div className="container">
            <Testimonals />
          </div>
        </div>
        <div className="about__courses-certificate">
          <Certificate />
        </div>
        <Subscribe />
        <Footer />
      </section>
    </>
  )
}
