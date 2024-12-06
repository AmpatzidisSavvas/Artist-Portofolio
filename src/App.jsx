import React from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
