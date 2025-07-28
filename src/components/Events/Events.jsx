import './Events.css'
import './EventsInfo.jsx'
import { eventBoxItem } from '../../data.js'
import { EventsInfo } from './EventsInfo.jsx'



export const Events = () => {
  return (
    <section className="events">
      <div className="container">
        <div className="events__inner">
          <h6 className='events__subtitle'>Our Events</h6>
          <h1 className="events__title">Lectures & workshops</h1>
        </div>
        <div className="events__box">
          {eventBoxItem.map((el, index) => {
            return <EventsInfo key={index} eventBox={el} />
          })}
        </div>
        <div className="events__explore">
          <h3 className="events__explore-title">Do you want more?</h3>
          <a href="#" className="event__explore-link">Explore all events</a>
        </div>
      </div>
    </section>
  )
}
