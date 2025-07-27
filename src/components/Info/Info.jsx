import './Info.css'
import dotIcon from '../../assets/icons/dot.svg'

export const Info = () => {
  return (
    <section className="info">
      <div className="container">
        <div className="info__inner">
          <div className="info__item">
            <p className="info__count">1200</p>
            <p className="info__text">Students graduated</p>
          </div>
          <img src={dotIcon} alt="Dot" />
          <div className="info__item">
            <p className="info__count">84</p>
            <p className="info__text">Completed courses</p>
          </div>
          <img src={dotIcon} alt="Dot" />
          <div className="info__item">
            <p className="info__count">16</p>
            <p className="info__text">Qualified tutors</p>
          </div>
          <img src={dotIcon} alt="Dot" />
          <div className="info__item">
            <p className="info__count">5</p>
            <p className="info__text">Years of experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
