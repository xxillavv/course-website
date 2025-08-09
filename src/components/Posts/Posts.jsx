import { postsData } from "../../data"
import { PostsItem } from "./PostsItem"
import './Posts.css'

export const Posts = () => {
  return (
    <section className="posts">
      <div className="container">
        <div className="posts__inner">
          <h6 className="posts__subtitle">Our blog</h6>
          <div className="posts__title-box">
            <h1 className="posts__title">Latest posts</h1>
            <a href="#" className="posts__title-link">Go to blog</a>
          </div>
          <div className="posts__box">
            {postsData.map((el, index) => {
              return <PostsItem key={index} postsDataItem={el}/>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
