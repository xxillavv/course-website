export const Member = ({teamMembers}) => {
  return (
    <div className="team__members-item">
      <img src={teamMembers.imageSrc} alt="" className="team__members-item-image" />
      <p className="team__members-item-name">{teamMembers.name}</p>
      <p className="team__members-item-role">{teamMembers.role}</p>
    </div>
  )
}
