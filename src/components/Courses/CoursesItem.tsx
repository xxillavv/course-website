import type { ICourseData } from "../../types/interfaces.js"

type TCourseData = { courseData: ICourseData }

export const CoursesItem = ({ courseData }: TCourseData) => {
  return (
    <div className="course__item">
      <img src={courseData.src} alt="Course image" className="course__item-image" />
      <div className="course__item-right">
        <p className="course__item-right-text" style={{ backgroundColor: courseData.color }}>{courseData.theme}</p>
        <p className="course__item-right-title">{courseData.title}</p>
        <div className="course__item-right-text-box">
          <p className="course__item-right-price">{courseData.price}</p>
          <p className="course__item-right-afterprice">{courseData.after}</p>
        </div>
      </div>
    </div >
  )
}