 import React from 'react'
import './Home.css'
import { useSelector } from 'react-redux';
const Home = () => {
  const { loading,portfolioData } = useSelector((state)=>state.root);
  const {intros} =portfolioData;
  const {description, lottieURL, welcomeText} = intros
  console.log(description, lottieURL, welcomeText)
  
  return (
    <div className='conatiner' id='Home'>
      <div className='heading'>
        <h2>{welcomeText}</h2>
     </div>
     <div className='para'><p>{description}</p></div>
     <div className='img'>
        <img src={`${lottieURL}`} alt="profile" className='profile' />
     </div>
    </div>
  )
}

export default Home
