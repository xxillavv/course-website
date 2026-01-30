import { teamMembers } from '../../data.js'
import { Member } from './Member.js'
import { Testimonals } from './Testimonals.js'

import './Team.css'

export const Team = () => {
  return (
    <section className="team">
      <div className="container">
        <div className="team__inner">
          <h6 className="team__subtitle">Best tutors are all here</h6>
          <h1 className="team__title">Meet our team</h1>
          <div className="team__members">
            {teamMembers.map((el, index) => {
              return <Member key={index} teamMembers={el} />
            })}
          </div>
          <Testimonals />
        </div>
      </div>
    </section>
  )
}
