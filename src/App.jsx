import Main from "./Pages/Main/Main";
import { ContactsPage } from "../src/Pages/Contacts/Contacts";
import { Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </>
  )
}