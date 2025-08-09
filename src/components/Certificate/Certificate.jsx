import './Certificate.css'
import certificateLogo1 from '../../assets/logos/certificate-1.png'
import certificateLogo2 from '../../assets/logos/certificate-2.png'
import certificateLogo3 from '../../assets/logos/certificate-3.png'
import mainCertificate from '../../assets/main-images/certificate.png'

export const Certificate = () => {
  return (
    <section className="certificate">
      <div className="container">
        <div className="certificate__inner">
          <div className="certificate__left">
            <h6 className="certificate__left-subtitle">Createx Certificate</h6>
            <h1 className="certificate__left-title">Your expertise will be confirmed</h1>
            <p className="certificate__left-text">We are accredited by international professional organizations and institutes:</p>
            <div className="certificate__left-images">
              <img src={certificateLogo1} alt="Certificate organizations" className="certificate__left-img" />
              <img src={certificateLogo2} alt="Certificate organizations" className="certificate__left-img" />
              <img src={certificateLogo3} alt="Certificate organizations" className="certificate__left-img" />
            </div>
          </div>
          <div className="certificate__right">
            <img src={mainCertificate} alt="Certificate" className="certificate__image" />
          </div>
        </div>
      </div>
    </section>
  )
}
