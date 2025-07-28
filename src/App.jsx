import { Benefit } from "./components/Benefit/Benefit"
import { Courses } from "./components/Courses/Courses"
import { Header } from "./components/header/Header"
import { Info } from "./components/Info/Info"
import { Study } from "./components/Study/Study"
import { Why } from "./components/Why/Why"
import { Events } from "./components/Events/Events"


export default function App() {
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
    </>
  )
}