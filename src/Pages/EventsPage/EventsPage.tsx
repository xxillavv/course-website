import { useState } from 'react'

import { eventsData, eventsDataBlock } from '../../data.js'

import { Header } from '../../components/header/Header.js'
import { EventsInfo } from '../../components/Events/EventsInfo.js'
import { Subscribe } from '../../components/Subscribe/Subscribe.js'
import { Footer } from '../../components/Footer/Footer.js'
import { EventsInfoBlocks } from '../../components/Events/EventsInfoBlocks.js'

import arrowRight from '../../assets/icons/arrow-right.svg'
import sqrIcon from '../../assets/icons/events-filter-sqr.svg'
import sqrIconOrange from '../../assets/icons/events-filter-sqr-orange.svg'
import linesIcon from '../../assets/icons/events-filter-lines.svg'
import linesIconOrange from '../../assets/icons/events-filter-lines-orange.svg'

import './EventsPage.css'

export const EventsPage = () => {
  const [activeBtn, setActiveBtn] = useState<number>(2)

  const makeOrangeBtn = (index: number) => {
    setActiveBtn(index)
  }

  return (
    <>
      <Header />
      <section className='events-list'>
        <div className="container">
          <h6 className="events-list__subtitle">Our events</h6>
          <h1 className="events-list__title">Lectures, workshops & master-classes</h1>
          <div className="events-list__filter">
            <label htmlFor="events-list__filter-category" className='events-list__filter-category-label'>
              <select name="events-list__filter-category" id="events-list__filter-category">
                <option value="all-themes">all themes</option>
                <option value="all-themes">all themes</option>
                <option value="all-themes">all themes</option>
                <option value="all-themes">all themes</option>
                <option value="all-themes">all themes</option>
              </select>
            </label>
            <label htmlFor="events-list__filter-sort" className='events-list__filter-sort-label'>
              <select name="events-list__filter-sort" id="events-list__filter-sort">
                <option value="latest">latest</option>
                <option value="latest">latest</option>
                <option value="latest">latest</option>
                <option value="latest">latest</option>
                <option value="latest">latest</option>
              </select>
            </label>
            <label htmlFor="events-list__filter-show" className='events-list__filter-show-label'>
              <select name="events-list__filter-show" id="events-list__filter-show">
                <option value="9">9</option>
                <option value="9">9</option>
                <option value="9">9</option>
                <option value="9">9</option>
                <option value="9">9</option>
              </select>
            </label>
            <label htmlFor="events-list__filter-search" className='events-list__filter-search-label'>
              <input placeholder='Search event...' type="text" id="events-list__filter-search-input" />
            </label>
            <button className='events-list__filter-block-button'>
              <img className='events-list__filter-block-image' src={activeBtn === 1 ? sqrIconOrange : sqrIcon} onClick={() => makeOrangeBtn(1)} alt="Square" />
            </button>
            <button className='events-list__filter-lines-button'>
              <img className='events-list__filter-lines-image' src={activeBtn === 2 ? linesIconOrange : linesIcon} alt="Lines" onClick={() => makeOrangeBtn(2)} />
            </button>
          </div>
          <div className={activeBtn === 2 ? 'events-list__box' : 'events-list__box-squares'}>
            {activeBtn === 2 ? eventsData.map((el, index) => {
              return <EventsInfo key={index} eventBox={el} />
            }) :
              eventsDataBlock.map((el, index) => {
                return <EventsInfoBlocks key={index} eventBox={el} />
              })}
            <div className="events-list__box-pages">
              <button className="events-list__box-page-count active-page">1</button>
              <button className="events-list__box-page-count">2</button>
              <button className="events-list__box-page-count">3</button>
              <button className="events-list__box-page-count">4</button>
              <button className='events-list__box-page-button'>
                <img src={arrowRight} alt="Arrow right" className='events-list__box-page-button-img' />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
      <Footer />
    </>
  )
}
