export const OurTeamItem = ({data}) => {
  return (
    <div className="our-team__box-item">
      <img className="our-team__box-item-image" src={data.imgSrc} alt={data.name} />
      <p className="our-team__box-item-name">{data.name}</p>
      <p className="our-team__box-item-role">{data.role}</p>
    </div>
  )
}
