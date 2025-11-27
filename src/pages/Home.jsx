import React from 'react'
import HeroSection from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import ExperienceCards from '../components/Experience-Cards'
import Skills from '../components/Skills'
import Solutions from '../components/Solutions'
import Projects from '../components/Projects'
import Testimonial from '../components/Testimonials'

function Home() {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Experience/>
      <ExperienceCards/>
      <Skills/>
      <Solutions/>
      <Projects/>
      <Testimonial/>
    </div>
  )
}

export default Home
