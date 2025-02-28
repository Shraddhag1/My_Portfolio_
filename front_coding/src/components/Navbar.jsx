import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
        <div className='container'>
            <nav>
                <div className='logo'>
                    <h2>Shraddha Gupta</h2>
                </div>
                <ul>
                    <li> <a href='/home'> HOME</a></li>
                    <li><a href='/academics'> ACADMEICS</a></li>
                    <li><a href='/project'> PROJECT</a></li>
                    <li><a href='/contact'> CONTACT</a></li>
                    <li><a href='/login'> LOGIN</a></li>
                </ul>
            </nav>
                
   

        </div>
  )
}

export default Navbar
