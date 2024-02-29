import React from 'react'
import './MenuStyle.css'
import { Link } from 'react-router-dom'
const Menu = () => {
    

  return (
    <>
      <div id="menu">
        <div className="menuWarpper">
            <div className="menuLeft">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/resume">Resume</Link>
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
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Menu
