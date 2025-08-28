export const OurCourse = ({ ourCourseData }) => {
  return (
    <div className="our-direct__box-item">
      <img className="our-direct__box-item-image" src={ourCourseData.imgSrc} />
      <div className="our-direct__box-item-content-box">
        <p className="our-direct__box-item-name" style={{ backgroundColor: ourCourseData.color }}>{ourCourseData.name}</p>
        <p className="our-direct__box-item-text">{ourCourseData.text}</p>
        <a href="#" className="our-direct__box-item-button">Check courses</a>
      </div>
    </div>
  )
}
