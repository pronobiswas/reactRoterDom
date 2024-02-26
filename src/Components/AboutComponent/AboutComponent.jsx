import React from 'react'
import './aboutcomponentStyle.css'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { IoLibraryOutline } from "react-icons/io5";
import { SiInfluxdb } from "react-icons/si";
import { BsWebcamFill } from "react-icons/bs";
import { BsBagCheckFill } from "react-icons/bs";

const AboutComponent = () => {
  return (
    <>
        <div className="containers" id="about">
            <div className=" cards aboutQuote">
                <h3>Who Am I?</h3>
                <hr className="line hr"/>
                <h4>A Web Designer / Developer Located In Our Lovely Earth</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.sit amet, Qui deserunt consequatur fugit repellendusillo voluptas?</p>
                <button className="btn btndanger">Download My CV</button>
            </div>

            <div className="cards personalInfo">
                    <h3>Personal Info</h3>
                    <hr className="line hr"/>
                    <ul className="list">
                        <li className="listIItem"><b>Birthdate</b> : <span>20/09/1996</span> </li>
                        <li className="listIItem"><b>Email </b> : <span><a href="mailto:biswaspronob@outlook.com">biswaspronob@outlook.com</a></span> </li>
                        <li className="listIItem"><b>Phone </b> : <span><a href="tell:01531-881596">+ (880) 1531-881596</a></span> </li>
                        <li className="listIItem"><b>Skype</b> : <span>Pronob Biswas</span> </li>
                        <li className="listIItem"><b>Address</b>  : <span>1200 shewrapar Mirpur Dhaka</span> </li>
                    </ul>
                    <p className=" iconItem">
                        <span className="aboutIIcon"><FaFacebook /></span>
                        <span className="aboutIIcon"><FaLinkedin /></span>
                        <span className="aboutIIcon"><FaGithub /></span>
                        <span className="aboutIIcon"><FaSkype /></span>
                        <span className="aboutIIcon"><IoLibraryOutline /></span>
                    </p>
            </div>

            <div className="cards expertise">
                
                    <h3>My Expertise</h3>
                    <hr className="line hr"/>

                    <div className="exrertiseRow">
                        <div className="expertiseIconBox"><SiInfluxdb /></div>
                        <div className="expertiseTextBox">
                            <span>UX Design</span>
                            <p><small>exercitat Repellendus, corrupt.</small></p>
                        </div>
                    </div>

                    <div className="exrertiseRow">
                        <div className="expertiseIconBox"><BsWebcamFill /></div>
                        <div className="expertiseTextBox">
                            <p>Web Development</p>
                            <p><small>Lorem ipsum dolor sit consectetur.</small></p>
                        </div>
                    </div>

                    <div className="exrertiseRow">
                        <div className="expertiseIconBox"><BsBagCheckFill /></div>
                        <div className="expertiseTextBox">
                            <p>Digital Marketing</p>
                            <p><small>Lvoluptate commodi illo voluptatib.</small></p>
                        </div>
                    </div>

                
            </div>
        </div>
    </>
  )
}

export default AboutComponent
