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
<<<<<<< HEAD
        <img src={`${lottieURL}`} alt="profile" className='profile' />
=======
        <img src="profile.jpeg" alt="profile" className='profile' />
>>>>>>> a4e9829fd92c3b2dfc48804b79b16296a70a0c66
     </div>
    </div>
  )
}

export default Home
