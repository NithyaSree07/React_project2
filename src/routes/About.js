import React from 'react'
import  Navbar  from '../components/Navbar';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import AboutMe from '../components/AboutMe';




export const About = () => {
  return (
    <div>
    <Navbar/>
    <Hero2 heading="Who Am I?" />
    <AboutMe/>
    <Footer/>
    </div>
  )
}
export default About;