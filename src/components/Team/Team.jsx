import './Team.css'
import { teamMembers, teamSlierButtons } from '../../data'
import { Member } from './Member'
import quoteImage from '../../assets/main-images/quote-1.png'
import { useState } from 'react'
import arrowLeft from '../../assets/icons/arrow-left.svg'
import arrowRight from '../../assets/icons/arrow-right.svg'


export const Team = () => {
  const [active, setActive] = useState(null)

  const handleClick = (index) => {
    setActive(index)
  }

  return (
    <section className="team">
      <div className="container">
        <div className="team__inner">
          <h6 className="team__subtitle">Best tutors are all here</h6>
          <h1 className="team__title">Meet our team</h1>
          <div className="team__members">
            {teamMembers.map((el, index) => {
              return <Member key={index} teamMembers={el} />
            })}
          </div>
          <h6 className="team__quote-subtitle">TESTIMONIALS</h6>
          <h1 className="team__quote-title">What our students say</h1>
          <div className="quote__inner">
            <span className="quote__navigation left">
              <img src={arrowLeft} alt="Arrow left" />
            </span>
            <div className="quote">
              <p className="team__quote-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.</p>
              <div className="team__quote-box">
                <img src={quoteImage} alt="Woman" className="team__quote-box-image" />
                <div>
                  <p className="team__quote-box-name">Eleanor Pena</p>
                  <p className="team__quote-box-role">Position, Course</p>
                </div>
              </div>
            </div>
            <span className='quote__navigation right'>
              <img src={arrowRight} alt="Arrow right" />
            </span>
          </div>
          <div className="team__slider-buttons">
            {teamSlierButtons.map((index) => {
              return <button className={index === active ? 'team__slider-buttons-btn active__btn' : 'team__slider-buttons-btn'} onClick={() => handleClick(index)} key={index}></button>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
