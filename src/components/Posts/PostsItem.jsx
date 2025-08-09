export const PostsItem = ( {postsDataItem} ) => {
  return (
    <div className="posts__box-item">
      <img src={postsDataItem.imgSrc} alt={postsDataItem.theme} className="posts__box-item-image" />
      <div className="posts__box-item-about">
        {postsDataItem.aboutTheme && <p className="posts__box-item-about-theme">{postsDataItem.aboutTheme}</p>}
          {postsDataItem.aboutTheme && <span>{postsDataItem.separate}</span>}
        {postsDataItem.aboutDate &&  <p className="posts__box-item-about-date">{postsDataItem.aboutDate}</p>}
          {postsDataItem.aboutDate && postsDataItem.showSeparate && <span>{postsDataItem.separate}</span>}
        {postsDataItem.aboutTime && <p className="posts__box-item-about-time">{postsDataItem.aboutTime}</p>}
      </div>
      <p className="posts__box-item-theme">{postsDataItem.theme}</p>
      <p className="posts__box-item-text">{postsDataItem.text}</p>
      <a href="#" className="posts__box-item-link">{postsDataItem.link}</a>
    </div>
  )
}
