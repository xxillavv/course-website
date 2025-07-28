import './Benefit.css'
import { useState } from 'react'
import { buttons } from '../../data'
import benefitImage from '../../assets/main-images/benefit-image.png'

export const Benefit = () => {
  const [active, setActive] = useState(null)

  const handleClick = (index) => {
    setActive(index)
  }

  return (
    <section className="benefit">
      <div className="container">
        <div className="benefit__inner">
          <h3 className="benefit__title">Our benefits</h3>
          <h1 className="benefit__subtitle">That’s how we do it</h1>
          <div className="benefit__list">
            <div className="benefit__list-item">
              {buttons.map((el, index) => {
                return <button className={active === index ? 'benefit__list-button active' : 'benefit__list-button'} onClick={() => handleClick(index)} key={index}>
                  <span>
                    <img src={active === index ? el.imageRed : el.image} alt={index} key={index} className={active === index ? 'benefit__list-button-image active' : 'benefit__list-button-image'} />
                  </span>
                  {el.title}</button>
              })}
            </div>
          </div>
          <div className="benefit__info">
            <div className="benefit__info-textbox">
              <h2 className="benefit__info-textbox-title">Only practicing tutors</h2>
              <p className="benefit__info-textbox-subtitle">Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.</p>
            </div>
            <img src={benefitImage} alt="Benefit image" className="benefit__info-image" />
          </div>
        </div>
      </div>
    </section >
  )
}
