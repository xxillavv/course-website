import { Link } from "react-router-dom"

export const CoursesItemMembers = ({ courseData }) => {
  return (
    <Link to="box" className="about__courses__item">
      <img src={courseData.src} alt="Course image" className="about__courses-item-image" />
      <div className="about__courses-item-right">
        <p className="about__courses-item-right-text" style={{ backgroundColor: courseData.color }}>{courseData.theme}</p>
        <p className="about__courses-item-right-title">{courseData.title}</p>
        <div className="about__courses-item-right-text-box">
          <p className="about__courses-item-right-price">{courseData.price}</p>
          <p className="about__courses-item-right-afterprice">{courseData.after}</p>
        </div>
      </div>
    </Link >
  )
}