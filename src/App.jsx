import { Header } from "./components/header/Header"
import { Info } from "./components/Info/Info"
import { Study } from "./components/Study/Study"
import { Why } from "./components/Why/Why"


export default function App() {
  return (
    <>
      <div className="header__study-wrapper">
        <Header />
        <Study />
      </div>
      <Info />
      <Why />
    </>
  )
}