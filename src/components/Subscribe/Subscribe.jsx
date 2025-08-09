import './Subscribe.css'


export const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div className="subscribe__inner">
          <h6 className="subscribe__subtitle">Don’t miss anything</h6>
          <h1 className="subscribe__title">Subscribe to the Createx School announcements</h1>
          <form className="subscribe__form">
            <input type="text" className="subscribe__form-input" placeholder='Your working email' />
            <button className='subscribe__form-button'>Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
}
