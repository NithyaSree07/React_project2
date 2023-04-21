import "./FooterStyles.css"
import { FaHome, FaPhone, FaMailBulk, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";



import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer=container">
    <div className="left">
    <div className="location">
   <FaHome size={20}  style={{color:"#fff" , marginRight: "2rem" }}/>
    <div><p>Iris Washington</p>
    <p>365 york Ave.</p>
    <p>League City,TX 77539</p>
    </div>

    <div>
    
    </div></div>

    <div className="phone">
    <h4><FaPhone size={20}  style={{color:"#fff" , marginRight: "2rem" }}/>0421-041452313</h4>
    </div>

    <div className="email">
    <h4><FaMailBulk size={20}  style={{color:"#fff" , marginRight: "2rem" }}/>info.gmail.com</h4>
    </div>



    <div className="right">
    <h4>About the Website</h4>
    <p>Hey! I'm Nithya.Student at SriKrishna College of Engineering 
    and Technology.</p><p>This is my sample Portfolio using React Js.
    </p>

    <div className="social">
    <FaFacebook size={20}  style={{color:"#fff" , marginRight: "1rem" }}/>
    <FaTwitter size={20}  style={{color:"#fff" , marginRight: "1rem" }}/>
    <FaLinkedin size={20}  style={{color:"#fff" , marginRight: "1rem" }}/>
    </div>
    </div>
</div>
    </div>
    </div>
  )
}
export default Footer;