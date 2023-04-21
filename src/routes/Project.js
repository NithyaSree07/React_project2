import  Navbar  from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react'
import Hero2 from '../components/Hero2';
import Events from '../components/Events';




export const Project = () => {
  return (
    <div>
    <Navbar/>
    <Hero2  heading="PROJECTS." text="Some of my recent works"/>
    <Events/>
    <Footer/>
    </div>
  )
}
