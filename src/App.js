import Navbar from "./Navbar"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Registration from "./pages/Registration"
import { Route, Routes } from "react-router-dom"
import './App.css'
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </>
  )
}

export default App