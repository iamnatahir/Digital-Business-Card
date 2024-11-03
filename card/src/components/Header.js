import React from 'react';

export default function Header() {
  const openEmailClient = () => {
    window.location.href = 'mailto:itsamnatahir@gmail.com';
  };

  const openLinkedInProfile = () => {
    window.open('https://www.linkedin.com/in/your-linkedin-profile', '_blank');
  };

  return (
    <div>
      <img className='image' src='./me.png' alt='Profile' />
      <div className="info">
        <h2>AMNA TAHIR</h2>
        <h3>Frontend Developer</h3>
        <a href='mailto:itsamnatahir@gmail.com'>itsamnatahir@gmail.com</a>
      </div>
      <div className="buttons">
        <button className='button1' onClick={openEmailClient}>
          <i className="fa-solid fa-envelope"></i>Email
        </button>
        <button className='button2' onClick={openLinkedInProfile}>
          <i className="fa-brands fa-linkedin"></i>LinkedIn
        </button>
      </div>
    </div>
  );
}
