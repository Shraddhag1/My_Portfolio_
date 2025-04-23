import React from 'react'
import { Link } from 'react-router'
import './Login.css'
import { Link as RouterLink } from 'react-router-dom';
const Login = () => {
  return (
        
    <div id='Login'>
      <section className='login-panel'>
        
        <form>
            <h2> Admin Login </h2>
            <div className='input-box'>
                
                <input type="text" className='field' placeholder='Enter your name' required />
            </div>
            <div className='input-box'>
                
                <input type="Password" className='field' placeholder='Enter your Passsword' required />
            </div>
            
                 <button type='submit' className='btn2'> LOGIN</button>
        </form>

    </section>
    <RouterLink to="/"> 
    <button className='btn1'>Back</button>
                     </RouterLink>
    
    
    </div>
    

  )
}

export default Login
