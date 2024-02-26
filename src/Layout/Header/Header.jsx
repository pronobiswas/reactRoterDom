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
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/resume">Resume</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
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
