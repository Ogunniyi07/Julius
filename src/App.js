import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Test from './components/Test'
import homePage from './page/homePage'
import './App.css';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    // <div>
    //   <Nav/>
    //   <Home/>
    //   <About/>
    //   <Skills/>
    //   <Portfolio/>
    //   <Contact/>
    //   <Test />
    // </div>
    
    // <>
    //   <homePage/>
    // </>
    
    <>
      <Nav/>
              <Routes>
                {/* <Route path="/" element={<homePage/>} /> */}
                <Route path="/" element={<Home/>} />
                <Route path="about" element={<About />} />
                <Route path="/skills" element={<Skills/>} />
                <Route path="/portfolio" element={<Portfolio/>} />
                <Route path="/contact" element={<Contact/>} />
              </Routes>
      </>
  );
}

export default App;
