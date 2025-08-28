import Main from "./Pages/Main/Main";
import { ContactsPage } from "../src/Pages/Contacts/Contacts";
import { Route, Routes } from "react-router-dom";
import { CoursePage } from "./Pages/CoursePage/CoursePage";
import { createContext, useRef } from "react";
import { AboutUs } from "./Pages/AboutUs/AboutUs";

export const SectionContext = createContext()

export default function App() {
  const sectionRef = useRef()

  return (
    <>
      <SectionContext.Provider value={sectionRef}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </SectionContext.Provider >
    </>
  )
}