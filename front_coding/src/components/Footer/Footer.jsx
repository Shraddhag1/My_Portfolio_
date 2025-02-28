import React from 'react'
import "./Footer.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='container'>
      <div> <p>Living, learning, & leveling up <br/>
        one day at a time.</p></div>
        <div className='icons'>
        <a href="www.linkedin.com/in/shraddha-gupta-1b8118235" target='_blank' id='a'><FaLinkedin style={{height:"30px",width:"30px"}}/></a>
        <a href="https://github.com/Shraddhag1" target='_blank'><FaGithub style={{height:"30px",width:"30px"}}/></a>
         </div>
    </div>
    
  )
}

export default Footer
