// import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar'
import About from './Components/About/About'
import Services from './Components/Services/services'
import Work from './Components/MyWork/Work'
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
    </>
  )
}

export default App
