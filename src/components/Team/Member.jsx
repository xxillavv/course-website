import facebookIcon from '../../assets/icons/facebook-icon.svg'
import instagramIcon from '../../assets/icons/instagram-icon.svg'
import linkedinIcon from '../../assets/icons/linkedin-icon.svg'


export const Member = ({ teamMembers }) => {
  return (
    <div className="team__members-item">
      <div className="team__members-item-wrapper">
        <a href="#" className="team__members-item-link">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="#" className="team__members-item-link">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="#" className="team__members-item-link">
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
        <img src={teamMembers.imageSrc} alt="" className="team__members-item-image" />
      </div>
      <p className="team__members-item-name">{teamMembers.name}</p>
      <p className="team__members-item-role">{teamMembers.role}</p>
    </div>
  )
}
