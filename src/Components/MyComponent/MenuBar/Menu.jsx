import React from 'react'
import './MenuStyle.css'
const Menu = () => {
    

  return (
    <>
      <div id="menu">
        <div className="menuWarpper">
            <div className="menuLeft">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/resume">Resume</a>
                    </li>
                </ul>
            </div>
            <div className="menuMidle">
                <h3>pronob biswas</h3>
                <h5>Front-End developer</h5>
            </div>
            <div className="menuRight">
                <ul>
                    <li>
                        <a href="/portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="/blog">Blog</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Menu
