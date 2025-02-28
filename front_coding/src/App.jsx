import React from 'react'
import Navbar from './components/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import Academics from './components/Acadmics/Academics'
const App = () => {
  return (
    
    
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Academics/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App
