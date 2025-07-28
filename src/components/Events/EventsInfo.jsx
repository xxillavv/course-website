export const EventsInfo = ({ eventBox }) => {
  return (
    <div className="events__box-item">
      <div className="event__box-item-left">
        <p className="events__box-item-day">{eventBox.day}</p>
        <div className="events__box-item-date">
          <p className="events__box-item-date-month">{eventBox.month}</p>
          <p className="events__box-item-date-time">{eventBox.time}</p>
        </div>
        <div className="events__box-item-info">
          <p className="events__box-item-info-text">{eventBox.text}</p>
          <p className="event__box-item-info-about">{eventBox.about}</p>
        </div>
      </div>
      <a href="#" className="event__box-item-link">View more</a>
    </div>
  )
}
