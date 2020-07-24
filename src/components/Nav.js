import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  return (
    <nav role="navigation" className="navbar">
      <header className="desktop-site-title">
        <h2>Joseph Rivera</h2>
        <h3>Full-Stack Developer</h3>
      </header>
      <Link to='/' className='about-btn'>About</Link>
      <Link to='/projects' className='projects-btn'>Projects</Link>
      <Link to='/contact' className='contact-btn'>Contact</Link>
      <div className="desktop-site-socials">
        <a href="https://github.com/antonibrivera" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i><span className="hide-text">GitHub</span></a>
        <a href="https://www.linkedin.com/in/antonibrivera/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i><span className="hide-text">LinkedIn</span></a>
        <a href="mailto:antonibrivera@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope-open"></i><span className="hide-text">Email</span></a>
      </div>
    </nav>
  )
}