import { Header } from "../../components/Header/Header"
import { Study } from "../../components/Study/Study"
import { Info } from "../../components/Info/Info"
import { Why } from "../../components/Why/Why"
import { Courses } from "../../components/Courses/Courses"
import { Benefit } from "../../components/Benefit/Benefit"
import { Events } from "../../components/Events/Events"
import { Certificate } from "../../components/Certificate/Certificate"
import { Team } from "../../components/Team/Team"
import { Posts } from "../../components/Posts/Posts"
import { Subscribe } from "../../components/Subscribe/Subscribe"
import { Footer } from "../../components/Footer/Footer"

export default function Main() {
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