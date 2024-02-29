import React from 'react';
import './bannerstyle.css';
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaGooglePlus } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";


import Menu from '../MyComponent/MenuBar/Menu';
import AboutComponent from '../AboutComponent/AboutComponent';

const Banner = () => {





  let typeText = document.querySelector("#typeingEffectText");
    let textToBeTyped = "HTML5 | CSS3 | JAVASCRIPT";
    let textToBeTypedArr = ["HTML5 | CSS3", "BOOTSTRAP5 | W3CSS | TAILWIND", "JAVASCRIPT | JQUERY", "REACT | NODE"];
    let index = 0, isAdding = true, textToBeTypedIndex = 0;
    
    function playAnim() {
      setTimeout(function () {
    
        typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index);
        if (isAdding) {
          
          if (index > textToBeTypedArr[textToBeTypedIndex].length) {
           
            isAdding = false
            typeText.classList.add("showAnim")
            
            setTimeout(function () {
              typeText.classList.remove("showAnim")
              playAnim()
            }, 1000)
            return
          } else {
            
            index++;
          }
        } else {
          
          if (index === 0) {
            
            isAdding = true
            
            textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
          } else {
           
            index--
          }
        }
        
        playAnim()
      },isAdding ? 120 : 60);
    }
    // start animation
    playAnim();
    // window.addEventListener("load", playAnim());
    






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
                          
                          
                          <span className="textAbove typedtext">I AM WORK WITH </span>
                          <span className="typText typeingtext" id='typeingEffectText'></span>
                          <br/>
                          
                          
                          <button className="print-btn"> <i className="bi bi-printer"></i> Print Resume</button>
                      </div>
                  </div>

              </div>
          </div>
        </div>
        <Menu/>
        <AboutComponent/>
    </>
  )
}

export default Banner
