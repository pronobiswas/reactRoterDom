import React from 'react'
import './headerStyle.css'
import '../../App.css'

const Header = () => {

  return (
    <>
    <header>
        <div className="container">
          <nav>
            <div className="logo">
              <h1 id='logoTime'>LOGO</h1>
            </div>
            <ul>
              <li><Link to="/home">Home</Link></li>

              <li><Link to="/about">About</Link></li>

              <li><Link to="/resume">Resume</Link></li>

              <li><Link to="/blog">Blog</Link></li>

              <li><a href="/blog">Blog</a></li>

              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="in">
              <a href="#" className="loginBtn">
              {/* <TfiPalette /> */}
              <div className="toogleBall"></div>
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
