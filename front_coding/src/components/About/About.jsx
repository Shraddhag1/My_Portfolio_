import React from 'react'
import './About.css'
import { useSelector } from 'react-redux';
const About = () => {
  
  const { loading,portfolioData } = useSelector((state)=>state.root);
  const {about} =portfolioData;
  const {description1} = about;
  console.log(about)
    
  return (
    <div className='about' id='About'>
      <p className='p'>{description1 || "" }</p>
    </div>
  )
}

export default About
