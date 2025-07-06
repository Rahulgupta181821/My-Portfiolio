import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Marque from './components/Marque'
import { Skills } from './components/Skills'
import Achive from './components/Achive'
import Project from './components/Project'
import  Contact  from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className="relative">
    <Navbar/>
    <Home/>
    <Marque/>
    <About/> 
    <Skills/>
    <Achive/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
