import studyIlustration from '../../assets/Header/illustration.png'
import playBtn from '../../assets/icons/play-btn.svg'
import './Study.css'


export const Study = () => {
  return (
    <section className="study">
      <div className="container">
        <div className="study__inner">
          <div className="study__left">
            <div className="play-showreel">
              <button className="play-showreel__button">
                <img src={playBtn} alt="Play button" />
              </button>
              <p className="play-showreel__text">Play showreel</p>
            </div>
            <h1 className="study__left-text">Enjoy studying with Createx Online Courses</h1>
            <div className="study__navigation">
              <a href="#" className="study__navigation-about">About us</a>
              <a href="#" className="study__navigation-explore">Explore courses</a>
            </div>
          </div>
          <img src={studyIlustration} alt="Study illustration" />
        </div>
      </div>
    </section>
  )
}
