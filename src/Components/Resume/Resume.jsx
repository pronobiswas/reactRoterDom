import React from 'react'
import './Resumestyle.css'

const Resume = () => {
  return (
    <>
      
        <div className="container" id="resume">

          <h1><span>My</span> Resume</h1>
            <div className='resumeWarpper'>
                <div className='resumeContentWarpper'>
                    <div className='expertises'>
                        <h4>Expertise</h4>
                        <hr className='resuIndiccator'/>
                        <h4 >2017 - Present</h4>
                        <p>UX Devoloper</p>
                        <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</small></p>
                        <hr/>
                        <h4 >2016 - 2017</h4>
                        <p>Frond-end Developer</p>
                        <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</small></p>
                        <hr/>
                        <h4>2015 - 2016</h4>
                        <p>UX Designer</p>
                        <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</small></p>
                    </div>
                </div>

                <div className='resumeContentWarpper'>
                    <div >
                        <h4 >Education</h4>
                        <hr  className='resuIndiccator'/>
                        <h4 >2017 - Present</h4>
                        <p>B.E Computer Engineering</p>
                        <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</small></p>
                        <hr/>
                        <h4 >2016 - 2017</h4>
                        <p>High School Degree</p>
                        <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</small></p>
                        <hr/>
                        <h4>2015 - 2016</h4>
                        <p>UX Designer</p>
                        <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</small></p>
                    </div>
                </div>
                
                <div  className='resumeContentWarpper'>
                    <div className='techLanguse'>

                        <h4 >Skills</h4>
                        <hr  className='resuIndiccator'/>
                        <div className='progressBox'>
                            <h6>HTML5 & CSS3</h6>
                                <div className='progressBar'>
                                    <div className='prOgresHTMLCSS'>91%</div>
                                </div>
                        </div>
                            <div className='progressBox'>
                                <h6>JavaScript</h6>
                                <div className='progressBar'>
                                    <div className='prOgresJS'>45%</div>
                                </div>
                            </div>

                            <div className='progressBox'>
                                <h6>BootStrap</h6>
                                <div className='progressBar'>
                                    <div className='prOgresBS'>70%</div>
                                </div>
                            </div>

                            <div classNameName='progressBox'>
                                <h6>Tailwind</h6>
                                <div className='progressBar'>
                                    <div className='prOgresTW'>85%</div>
                                </div>
                            </div>

                            <div className="progressBox">
                                <h6>REACT</h6>
                                <div className='progressBar'>
                                    <div className='prOgresR'>18%</div>
                                </div>
                            </div>
                    </div>

                    <div className='nativeLanguse'>
                        <h3>Languse</h3>
                        <hr />

                        <div className='myProgressBox'>
                            <h5>Bengali</h5>
                            <div className="myProgressbar">
                                <div className="myProgress Bengali">Fulent/Netive</div>
                            </div>
                        </div>

                        <div className='myProgressBox'>
                            <h5>English</h5>
                            <div className="myProgressbar">
                                <div className="myProgress English">well read&write</div>
                            </div>
                        </div>

                        <div className='myProgressBox'>
                            <h5>Hindi</h5>
                            <div className="myProgressbar">
                                <div className="myProgress Hindi">Good understanding</div>
                            </div>
                        </div>

                        <div className='myProgressBox'>
                            <h5>Urdu</h5>
                            <div className="myProgressbar">
                                <div className="myProgress Urdu">A litlebit knoladge</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </>
    
  )
}

export default Resume
