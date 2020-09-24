import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

function Nav(props) {
  const [active, setActive] = useState(false)

  const hamb_classes = `hamburger hamburger--spring${ active ? " is-active" : ""}`

  return (
    <React.Fragment>
      <header className="header">
      <nav className="navbar">
        <div className="icon">
          <span>ICON</span>
        </div>

        <div className="hamb">
          <div className={hamb_classes} type="button" onClick={ () => { setActive(!active)} }>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </div>
        </div>



        <div className={`hamb-main${ active ? " is-active" : ""}`}
          onClick={() => { setActive(false) }}
        >

          <div className="box">


          <Link to="/" onClick={() => { 
            setActive(false)
            props.setCurr("Home")
          }}>
            <div className={ props.curr === "Home" ? "current" : null }>
              Home
            </div>
          </Link>

          <hr />

          <Link to="/tutorials" onClick={() => {
            setActive(false)
            props.setCurr("Tutorials")
          }}>
            <div className={ props.curr === "Tutorials" ? "current" : null }>
              Tutorials
            </div>
          </Link>

          <hr />

          <Link to="/about"  onClick={() => {
            setActive(false)
            props.setCurr("About")
          }}>
            <div className={props.curr === "About" ? "current" : null }>
              About
            </div>
          </Link>

          <hr />

          <Link to="/more" onClick={() => {
            setActive(false)
            props.setCurr("More")
          }}>
            <div className={ props.curr === "More" ? "current" : null }>
              More
            </div>
          </Link>

          </div> {/* BOX */}

        </div>


        <div className="main">
          <Link to="/" onClick={() => { props.setCurr("Home") }}>
            <div className={ props.curr === "Home" ? "current" : null }>
              Home
            </div>
          </Link>

          <Link to="/tutorials" onClick={() => { props.setCurr("Tutorials") }}>
            <div className={ props.curr === "Tutorials" ? "current" : null }>
              Tutorials
            </div>
          </Link>

          <Link to="/about"  onClick={() => { props.setCurr("About") }}>
            <div className={ props.curr === "About" ? "current" : null }>
              About
            </div>
          </Link>

          <Link to="/more" onClick={() => { props.setCurr("More") }}>
            <div className={ props.curr === "More" ? "current" : null }>
              More
            </div>
          </Link>

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
