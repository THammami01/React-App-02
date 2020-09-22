import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <React.Fragment>
    <header className="header">
    <nav className="navbar">
      <div className="icon">
        <span>ICON</span>
      </div>
      <div className="hamb">
        ---
      </div>
      <div className="main">
        <div className="current">Home</div>
        <div>Tutorials</div>
        <div>About</div>
        <div>More</div>
      </div>
      <div className="auth">
        <span>Sign Up</span>
      </div>
    </nav>
    </header>
    <div className="empty-box"></div>
    </React.Fragment>
  )
}

export default Nav
