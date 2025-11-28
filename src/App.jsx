import React from 'react'
import Navbar from './components/re-used-components/Navbar'
import NewsletterFooter from './components/re-used-components/Footer'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutPage from './pages/About-Page'
import Services from './pages/Services'
import ProjectsPage from './pages/Projects-Page'
import ContactPage from './pages/Contact-Page'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/about' element = {<AboutPage/>}/>
          <Route path='/services' element = {<Services/>}/>
          <Route path='/projects' element = {<ProjectsPage/>}/>
          <Route path='/contact' element = {<ContactPage/>}/>
        </Routes>
        <NewsletterFooter/>
      </BrowserRouter>
    </>
  )
}

export default App