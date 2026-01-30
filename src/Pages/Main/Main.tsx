import { Header } from "../../components/header/Header.js"
import { Study } from "../../components/Study/Study.js"
import { Info } from "../../components/Info/Info.js"
import { Why } from "../../components/Why/Why.js"
import { Courses } from "../../components/Courses/Courses.js"
import { Benefit } from "../../components/Benefit/Benefit.js"
import { Events } from "../../components/Events/Events.js"
import { Certificate } from "../../components/Certificate/Certificate.js"
import { Team } from "../../components/Team/Team.js"
import { Posts } from "../../components/Posts/Posts.js"
import { Subscribe } from "../../components/Subscribe/Subscribe.js"
import { Footer } from "../../components/Footer/Footer.js"

export function Main() {
  return (
    <>
        <div className="header__study-wrapper">
          <Header />
          <Study />
        </div>
        <Info />
        <Why />
        <Courses />
        <Benefit />
        <Events />
        <Certificate />
        <Team />
        <Posts />
        <Subscribe />
        <Footer />
    </>
  )
}