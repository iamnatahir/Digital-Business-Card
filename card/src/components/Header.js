import React from 'react'
export default function Header() {
  return (
    <div>
     <img className='image' src='./me.png' alt=''/>
     <div className="info">
      <h2>AMNA TAHIR</h2>
     <h3>Frontend Developer</h3>
     <p>itsamnatahir@gmail.com</p>
     </div>
     <div className="buttons">
       <button className='button1'><i class="fa-solid fa-envelope"></i>Email</button>
     <button className='button2'><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
     </div>
    </div>
  )
}
