import React from 'react'
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

import "./Navbar.css"
const Links=[
    {link:"Home",Section:"Home"},
    {link:"Academics",Section:"Academics"},
    {link:"Project",Section:"Projects"},
    {link:"Contact",Section:"contact"},
]
const Navbar = () => {
  return (
        <div className='container'>
            <nav>
                <div className='logo'>
                    <h2>Shraddha Gupta</h2>
                </div>
                {Links.map((link,index) => {
                    return( 
                        <ul key={index}>
                <Link 
                to={link.Section}
                smooth={true}
                spy={true}
                duration={800}
                offset={-130}
                >
                {link.link}
                </Link>
               
                </ul>
                 

                    )
                })}
                <RouterLink to="/Login" id='abc'> 
                <button className='btnnn'  > Login</button>
                 </RouterLink>
                
            </nav>
                
   

        </div>
  )
}

export default Navbar
