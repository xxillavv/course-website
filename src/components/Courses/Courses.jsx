import './Courses.css'
import { CoursesItem } from './CoursesItem'

import { courseData } from '../../data'

export const Courses = () => {
  return (
    <section className="courses">
      <div className="container">
        <div className="courses__inner">
          <p className="courses__text">Ready to learn?</p>
          <div className="courses__box">
            <h3 className="courses__box-title">Featured Courses</h3>
            <a href="#" className="courses__box-button">View all courses</a>
          </div>
          <div className="course__item-wrapper">
            {courseData.map((el, index) => {
              return <CoursesItem key={index} courseData={el} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
