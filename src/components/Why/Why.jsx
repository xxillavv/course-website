import girlImage from '../../assets/main-images/why-section-image.png'
import './Why.css'


export const Why = () => {
  return (
    <section className="why">
      <div className="container">
        <div className="why__inner">
          <img src={girlImage} alt="Image" className="why__left-image" />
          <div className="why__right">
            <p className="why__right-text">Who we are</p>
            <h2 className="why__right-title">Why Createx?</h2>
            <ul className="why__right-list">
              <li className="why__right-list-item">A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
              <li className="why__right-list-item">Vulputate placerat amet pulvinar lorem nisl.</li>
              <li className="why__right-list-item">Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
              <li className="why__right-list-item">Etiam duis lobortis in fames ultrices commodo nibh.</li>
              <li className="why__right-list-item">Tincidunt sagittis neque sem ac eget.</li>
              <li className="why__right-list-item">Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</li>
            </ul>
            <a href="#" className="why__right-button">More about us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
