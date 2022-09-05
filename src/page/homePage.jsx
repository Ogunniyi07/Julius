import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Home from '../components/Home'
import Nav from '../components/Nav'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'

function homePage() {
  return (
    <div>
        <Nav/>
        <Home/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Contact/>
    </div>
  )
}

export default homePage