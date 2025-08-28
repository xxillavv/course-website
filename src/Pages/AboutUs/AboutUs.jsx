import { Header } from "../../components/Header/Header"
import aboutUsImage from "../../assets/main-images/about-us-image.png"
import './AboutUs.css'
import aboutInfoImage from '../../assets/main-images/about-info.png'
import baseIcon from '../../assets/main-images/our-way-icon-1.svg'
import chatIcon from '../../assets/main-images/our-way-icon-2.svg'
import targetIcon from '../../assets/main-images/our-way-icon-3.svg'
import calendarIcon from '../../assets/main-images/our-way-icon-4.svg'
import { OurCourse } from "./OurCourse"
import { ourDirectData, ourTeamData, reviewIcons } from "../../data"
import processImage from '../../assets/main-images/process-image.png'
import { Member } from "../../components/Team/Member"
import { Testimonals } from "../../components/Team/Testimonals"
import { postsData } from "../../data"
import { PostsItem } from "../../components/Posts/PostsItem"
import { Subscribe } from "../../components/Subscribe/Subscribe"
import { Footer } from "../../components/Footer/Footer"

export const AboutUs = () => {
  return (
    <>
      <Header />
      <section className="about-us">
        <div className="container">
          <div className="about-us__inner">
            <div className="about-us__left">
              <h6 className="about-us__subtitle">About us</h6>
              <h1 className="about-us__title">Createx Online School</h1>
              <p className="about-us__main-text">Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts.</p>
              <p className="about-us__text">We provide relevant approaches to online learning, internships and employment in the largest companies in the country. Our educational programs help you get a new specialty from scratch. During your studies, we will help you find a job. Check the courses and online events that we organise.</p>
              <div className="about-us__buttons">
                <a href="#" className="about-us__buttons-explore">Explore events</a>
                <a href="#" className="about-us__buttons-browse">Browse courses</a>
              </div>
            </div>
            <img src={aboutUsImage} alt="#" />
          </div>
        </div>
      </section>
      <section className="about-info">
        <div className="container">
          <div className="about-info__inner">
            <div className="about-info__left">
              <button className="about-info__watch">Watch Video</button>
              <img src={aboutInfoImage} alt="" />
            </div>
            <div className="about-info__right">
              <p className="about-info__right-students">students graduated</p>
              <p className="about-info__right-courses">completed courses</p>
              <p className="about-info__right-tutors">qualified tutors</p>
              <p className="about-info__right-experience">years of experience</p>
            </div>
          </div>
        </div>
      </section>
      <section className="our-way">
        <div className="container">
          <h6 className="out-way__subtitle">We always stand for</h6>
          <h1 className="our-way__title">Our core values</h1>
          <div className="our-way__box">
            <div className="our-way__box-item">
              <span>
                <img className="our-way__box-item-image" src={baseIcon} alt="" />
              </span>
              <p className="our-way__box-item-tile">Structured Approach</p>
              <p className="our-way__box-item-text">Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. </p>
            </div>
            <div className="our-way__box-item">
              <span>
                <img className="our-way__box-item-image" src={chatIcon} alt="" />
              </span>
              <p className="our-way__box-item-tile">Professional Feedbacks</p>
              <p className="our-way__box-item-text">Culpa nostrud commodo ea consequat reprehenderit aliquip. </p>
            </div>
            <div className="our-way__box-item">
              <span>
                <img className="our-way__box-item-image" src={targetIcon} alt="" />
              </span>
              <p className="our-way__box-item-tile">Efficiency</p>
              <p className="our-way__box-item-text">Viverra scelerisque consequat net. Adipisicing esse consequat. </p>
            </div>
            <div className="our-way__box-item">
              <span>
                <img className="our-way__box-item-image" src={calendarIcon} alt="" />
              </span>
              <p className="our-way__box-item-tile">Flexible Shedule</p>
              <p className="our-way__box-item-text">Aute eiusmod dolore dolore deserunt veniam ad deserunt. </p>
            </div>
          </div>
          <div className="our-direct">
            <div className="our-direct__inner">
              <h6 className="our-direct__subtitle">our main directions</h6>
              <h1 className="our-direct-title">What do we teach</h1>
              <div className="our-direct__box">
                {ourDirectData.map((el, index) => {
                  return <OurCourse key={index} ourCourseData={el} />
                })}
                <div className="our-direct__box-last-item">
                  <p className="our-direct__box-last-item-text">New studying program coming soon...</p>
                </div>
              </div>
            </div>
          </div>
          <div className="process">
            <h6 className="process__subtitle">Studying process</h6>
            <h1 className="process__title">That’s how we do it</h1>
            <div className="process__inner">
              <div className="process__left">
                <div className="process__left-item">
                  <p className="process__left-item-step">STEP 1</p>
                  <p className="process__left-item-title">Watching online video lectures</p>
                  <p className="process__left-item-text">Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.</p>
                </div>
                <div className="process__left-item">
                  <p className="process__left-item-step">STEP 2</p>
                  <p className="process__left-item-title">Passing test</p>
                  <p className="process__left-item-text">Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. </p>
                </div>
                <div className="process__left-item">
                  <p className="process__left-item-step">STEP 3</p>
                  <p className="process__left-item-title">Curator’s feedback</p>
                  <p className="process__left-item-text">Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis. </p>
                </div>
                <div className="process__left-item">
                  <p className="process__left-item-step">STEP 4</p>
                  <p className="process__left-item-title">Corrections if needed</p>
                  <p className="process__left-item-text">Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor.</p>
                </div>
              </div>
              <img src={processImage} alt="" className="process__image" />
            </div>
          </div>
          <div className="our-team">
            <h6 className="our-team__subtitle">Best tutors are all here</h6>
            <h1 className="our-team__title">Meet our team</h1>
            <div className="our-team__box">
              {ourTeamData.map((el, index) => {
                return <Member key={index} teamMembers={el} />
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="reviews">
        <div className="container">
          <div className="reviews-testimonals__wrapper">
            <Testimonals />
          </div>
          <h6 className="reviews__subtitle">best jobs for you</h6>
          <h1 className="reviews__title">Our students work here</h1>
          <div className="reviews__box">
            {reviewIcons.map((el, index) => {
              return <img className="reviews__box-img" src={el} alt={index} key={index} />
            })}
          </div>
        </div>
      </section>
      <section className="latest__posts">
        <div className="container">
          <div className="posts__box latest__posts-box">
            {postsData.map((el, index) => {
              return <PostsItem key={index} postsDataItem={el} />
            })}
          </div>
        </div>
      </section>
      <Subscribe />
      <Footer />
    </>
  )
}