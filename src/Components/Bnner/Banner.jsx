import React, { useState } from 'react';
import './bannerstyle.css';
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaGooglePlus } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import myImage from './images/mypic.jpg'


import Menu from '../MyComponent/MenuBar/Menu';
import AboutComponent from '../AboutComponent/AboutComponent';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

const Banner = () => {

    const [dispAvatar , setDispAvatar] = useState(false)

    window.addEventListener("scroll" , (e)=>{
        if(e.currentTarget.scrollY > 600){
            setDispAvatar(false)
        }else{
            setDispAvatar(true)
        }
    })
    
  return (
    <>
        <div id='banner'>
          <div className="container">
              <div className="FirstRow">

                  <div className="social-container">
                      <sapn className="icon"><FaFacebook /></sapn>
                      <sapn className="icon"><IoLogoTwitter /></sapn>
                      <sapn className="icon"><FaGooglePlus /></sapn>
                      <sapn className="icon"><FaDiscord /></sapn>
                      <sapn className="icon"><FaLinkedin /></sapn>
                      <sapn className="icon"><FaGithubSquare /></sapn>
                  </div>

                  <div className="row heading-txt">
                      <div className=" heading">
                          <p className="hello">Hello ,I Am</p>
                          <span className="pronob">Pronob Biswas</span>
                          <p className="fassion">Front end Designer | Developer </p>
                          
                          
                          <span className="textAbove typedtext">I AM WORK WITH 
                            <TypeAnimation
                              sequence={['HTML5 , CSS3 ,SCSS, JavaScript', 1500, 'BootStrap Tailwind MUI', 1500, 'ReactJS NodeJS FireBase' , 1500]}
                              style={{  }}
                              repeat={Infinity}
                            />
                          </span>
                          <span className="typText typeingtext" id='typeingEffectText'></span>
                          <br/>
                          
                          
                          <button className="print-btn"> <i className="bi bi-printer"></i> Print Resume</button>
                      </div>
                  </div>

              </div>
          </div>
        </div>

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
                

                {
                    dispAvatar?
                        <div className='menuImagePic'>
                        <div className="imgww">
                            <img src={myImage} alt="png" />
                        </div>
                        </div>
                        :
                        <div>
                        <h3>pronob biswas</h3>
                        <h5>Front-End developer</h5>
                        </div>
                }

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

        {/* <Menu/> */}
        <AboutComponent/>
    </>
  )
}

export default Banner
