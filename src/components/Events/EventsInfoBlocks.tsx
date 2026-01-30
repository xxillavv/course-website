import { IEventsDataBlock } from "../../types/interfaces.js"

type TEventBox = { eventBox: IEventsDataBlock }

export const EventsInfoBlocks = ({ eventBox }: TEventBox) => {
  return (
    <div className="events__box-item-block">
      <p className="ecents__box-item-block-data">{eventBox.data}</p>
      <p className="events__box-item-block-time">{eventBox.time}</p>
      <p className="events__box-item-block-text">{eventBox.text}</p>
      <p className="events__box-item-block-about">{eventBox.about}</p>
      <button className="events__box-item-block-button">View more</button>
    </div>
  )
}
