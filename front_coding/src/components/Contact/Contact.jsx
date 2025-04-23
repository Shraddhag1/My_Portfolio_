import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className='contact' id='Contact'>
        
        <form>
            <h2>Contact Form</h2>
            <div className='input-box'>
                <label>Full Name</label>
                <input type="text" className='field' placeholder='Enter your name' required />
            </div>
            <div className='input-box'>
                <label>Email Address</label>
                <input type="email" className='field' placeholder='Enter your email' required />
            </div>
            <div className='input-box'>
                <label>Your Message</label>
                <textarea  className='mess' placeholder='Enter your Message'></textarea>
                 </div>
                 <button id='button' type='submit'> Send Message</button>
        </form>

    </section>
      
  )
}

export default Contact
