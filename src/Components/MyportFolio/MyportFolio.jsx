import React from 'react'
import './myportfolio.css'

const MyportFolio = () => {
  return (
    <>
    <div id='PortFolios'>
      <div className="container">
        <h2><span>My</span> Portfolio</h2>
        <div className="tabBtn">
            <button>New</button>
            <button>Adversting</button>
            <button>Branding</button>
            <button>Web</button>
        </div>
        <div className="portfolioCardWarpper">
            <div className="CardCol">
                <div className="oneboxOne portPicBox">
                    <div className="portTextbox">
                        <h1>WEB Designing</h1>
                        <button className='portTextboxBtn'>show more</button>
                    </div>
                    <img src="pic.jpg" alt="pic" />
                </div>
                <div className="oneboxTwo portPicBox">
                    <div className="portTextbox">
                        <h1>WEB Designing</h1>
                        <button className='portTextboxBtn'>show more</button>
                    </div>
                    <img src="pic3.png" alt="pic" />
                </div>
            </div>
            <div className="CardCol">
            <div className="twobox portPicBox">
                    <div className="portTextbox">
                        <h1>WEB Designing</h1>
                        <button className='portTextboxBtn'>show more</button>
                    </div>
                    <img src="mypic2.jpg" alt="pic" />
            </div>
            <div className="twobox portPicBox">
                <div className="portTextbox">
                    <h1>WEB Designing</h1>
                    <button className='portTextboxBtn'>show more</button>
                </div>
                <img src="mypic3.jpg" alt="pic" />
            </div>
            <div className="twobox portPicBox">
                <div className="portTextbox">
                    <h1>WEB Designing</h1>
                    <button className='portTextboxBtn'>show more</button>
                </div>
                <img src="pic.jpg" alt="pic" />
            </div>
            </div>
            <div className="CardCol">
                <div className="threeboxOne portPicBox">
                    <div className="portTextbox">
                        <h1>WEB Designing</h1>
                        <button className='portTextboxBtn'>show more</button>
                    </div>
                    <img src="mypic6.jpg" alt="pic" />
                </div>
                <div className="threeboxtwo portPicBox">
                    <div className="portTextbox">
                        <h1>WEB Designing</h1>
                        <button className='portTextboxBtn'>show more</button>
                    </div>
                    <img src="mypic5.jpg" alt="pic" />
                </div>
                <div className="threeboxthree portPicBox">
                    <div className="portTextbox">
                        <h1>WEB Designing</h1>
                        <button className='portTextboxBtn'>show more</button>
                    </div>
                    <img src="pic5.jpg" alt="pic" />
                </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MyportFolio
