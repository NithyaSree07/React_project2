import "./EventsStyles.css" 
import images from "../assets/images.jpeg"
import pro from "../assets/pro.jpeg"

import React, { Component } from 'react'


export default class Events extends Component {
  render() {
    return (
      <div className="destination">
      <img className="edit-image" src={images} alt="proimage"/>
      <div className="first-pro">
      <h1 className="edit1">ICT ACADEMY LEARNATHON </h1>
      <p className="text">ICT Academy in association with the industry partners, launches the fifth season of "LEARNATHON 2022" - a self-learning initiative for higher education students to build their foundational IT skills online. ​
      Since 2018, through Learnathon, ICT Academy has inculcated self-learning among college students and benefitted lakhs. 
      The 5th edition of Learnathon has been launched this year by ICT Academy in partnership with global tech majors. 
      This initiative is exclusive to the member institutions of ICT Academy.</p>
      
      <a href="https://drive.google.com/file/d/1IZsjF__em4Nq6YlhVVUITkQbD6w-Xrw8/view?usp=drivesdk"><p>Some of my Certications</p><button className="btn">Click here</button>
      </a>
      </div>
    

     
      
      <div className="destination">
      <img className="edit-image" src={pro} alt="proimage"/>
      <div className="first-pro">
      <h1 className="edit1">E-KART</h1>
      <p className="text"> Transport is a fundamental requirement of modern life, but the traditional combustion engine is quickly becoming outdated. 
      Petrol or diesel vehicles are highly polluting and are being quickly replaced by fully electric vehicles. Fully electric vehicles (EV) have zero tailpipe emissions and are much better for the environment. The electric vehicle revolution is here, and you can be part of it. 
      Will your next vehicle be an electric one?</p>
      

      </div>
    

     
      </div>
      </div>
      
    )
  }
}


