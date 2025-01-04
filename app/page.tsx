import React from 'react'
import HeroSection from './components/homepageSections/HeroSection'
import FeaturesSection from './components/homepageSections/FeatureSection'
import TestimonialsSection from './components/homepageSections/Testimonial'
import NavBar from './components/homepageSections/NavBar'
import { log } from 'console'

const page = () => {

  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <FeaturesSection/>
      <TestimonialsSection/>
    </div>
  )
}

export default page