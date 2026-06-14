import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import AIDashboard from './components/AIDashboard'
import Services from './components/Services'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";

function App(){

return (

  <BrowserRouter>

  <Routes>


  <Route
  path="/"
  element={
  <>
  <Preloader/>
  <Navbar/>
  <Hero/>
  <About/>
  <AIDashboard/>
  <Services/>
  <Projects/>
  <Experience/>
  <Contact/>
  <Footer/>

  </>
  }
  />


  <Route
  path="/projects/:slug"
  element={<ProjectDetails/>}
  />


  </Routes>

  </BrowserRouter>

)

}

export default App
