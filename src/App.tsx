import { createContext, RefObject, useRef } from "react";

import { Main } from "./Pages/Main/Main.js";
import { ContactsPage } from "./Pages/Contacts/Contacts.js";
import { Route, Routes } from "react-router-dom";
import { CoursePage } from "./Pages/CoursePage/CoursePage.js";
import { AboutUs } from "./Pages/AboutUs/AboutUs.js";
import { Blog } from "./Pages/Blog/Blog.js";
import { EventsPage } from "./Pages/EventsPage/EventsPage.js";

export const SectionContext = createContext<RefObject<HTMLElement | null> | null>(null)

export default function App() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <>
      <SectionContext.Provider value={sectionRef}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </SectionContext.Provider >
    </>
  )
}