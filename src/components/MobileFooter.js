import React from 'react';

export default function MobileFooter(props) {
  return (
    <footer role="contentinfo" className="mobile-footer">
      <a href="https://github.com/antonibrivera" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i><span className="hide-text">GitHub</span></a>
      <a href="https://www.linkedin.com/in/antonibrivera/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i><span className="hide-text">LinkedIn</span></a>
      <a href="mailto:antonibrivera@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope-open"></i><span className="hide-text">Email</span></a>
    </footer>
  )
}