import { useState } from "react"

import { Header } from "../../components/header/Header.js" 
import { PostsItem } from "../../components/Posts/PostsItem.js"
import { postsBlogData } from "../../data.js"
import { BlogSubscribe } from "./BlogSubscribe.js"
import { Footer } from "../../components/Footer/Footer.js"

import arrowRight from '../../assets/icons/arrow-right.svg'

import './Blog.css'

export const Blog = () => {
  const [activeBtn, setActiveBtn] = useState(1)

  const makeActiveButton = (index: number) => {
    setActiveBtn(index)
  }

  return (
    <>
      <Header />
      <section className="blog">
        <div className="container">
          <div className="blog__inner">
            <h6 className="blog__subtitle">Our blog</h6>
            <h1 className="blog__title">Createx School Journal</h1>
            <div className="blog__filter">
              <button className={activeBtn === 1 ? 'blog__filter-button active' : 'blog__filter-button'} onClick={() => makeActiveButton(1)}>All</button>
              <button className={activeBtn === 2 ? 'blog__filter-button active' : 'blog__filter-button'} onClick={() => makeActiveButton(2)}>Articles</button>
              <button className={activeBtn === 3 ? 'blog__filter-button active' : 'blog__filter-button'} onClick={() => makeActiveButton(3)}>Videos</button>
              <button className={activeBtn === 4 ? 'blog__filter-button active' : 'blog__filter-button'} onClick={() => makeActiveButton(4)}>Podcasts</button>
              <label htmlFor="blog__filter-select" className="blog__filter-select-label">Blog category</label>
              <select name="blog__filter-select" id="blog__filter-select">
                <option value="all-themes">all themes</option>
                <option value="all-themes">all themes</option>
                <option value="all-themes">all themes</option>
                <option value="all-themes">all themes</option>
                <option value="all-themes">all themes</option>
              </select>
              <label htmlFor="blog__filter-input" className="blog__filter-input-label">
                <input type="text" id="blog__filter-input" placeholder="Search blog..." />
              </label>
            </div>
            <div className="blog__box">
              {postsBlogData.map((el, index) => {
                return <PostsItem key={index} postsDataItem={el} />
              })}
            </div>
            <div className="blog__box-pages">
              <button className="blog__box-page active">1</button>
              <button className="blog__box-page">2</button>
              <button className="blog__box-page">3</button>
              <button className="blog__box-page">4</button>
              <button className="blog__box-pages-button">
                <img src={arrowRight} className="blog__box-pages-button-image" alt="Arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <BlogSubscribe />
      <Footer />
    </>
  )
}
