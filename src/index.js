import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Routes, Route} from 'react-router-dom'
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// import React from 'react'
// import Nav from './components/Nav'
// import Home from './components/Home'
// import About from './components/About'
// import Skills from './components/Skills'
// import Portfolio from './components/Portfolio'
// import Contact from './components/Contact'
// import './App.css';
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// ReactDOM.render(
//   <Router>
//     <Nav />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/skills" element={<Skills />} />
//       <Route path="/portfolio" element={<Portfolio />} />
//     </Routes>
//   </Router>,

//   document.getElementById("root")
// );