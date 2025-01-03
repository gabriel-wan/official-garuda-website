import { BrowserRouter, Route, Routes } from "react-router"
import CursorBackground from "./components/CursorBackground"
import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import People from "./pages/People"
import Events from "./pages/Events"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-[#FEED9F] selection:bg-teal-300 selection:text-teal-900">
      <BrowserRouter>
        <Navbar />
        <CursorBackground />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
