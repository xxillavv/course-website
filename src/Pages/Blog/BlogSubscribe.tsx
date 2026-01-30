import blogSubscribeImage from '../../assets/main-images/blog-subscribe-image.png'

export const BlogSubscribe = () => {
  return (
    <section className="blog-subscribe">
      <div className="container">
        <div className="blog-subscribe__inner">
          <img src={blogSubscribeImage} alt="Illustration" className="blog-subscribe__image" />
          <div className="blog-subscribe__right">
            <h2 className="blog-subscribe__right-title">Want to get the best articles weekly? Subscribe to our newsletter!</h2>
            <div className='blog-subscribe__right-box'>
              <input type="text" className='blog-subscribe__right-input' placeholder='Your working email' />
              <button className='blog-subscribe__right-button'>Subscribe</button>
            </div>
            <div className="blog-sibscribe__right-checkbox-box">
              <input type="checkbox" id="checkbox-blog" className='blog-subscribe__right-checkbox' />
              <label htmlFor="checkbox-blog" className='box-subscribe__right-checkbox-label'>I agree to receive communications from Createx Online School</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
