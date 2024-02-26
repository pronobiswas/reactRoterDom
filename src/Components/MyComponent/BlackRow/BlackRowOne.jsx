import React from 'react'
import './blackrowstyle.css'
import { TfiAlarmClock } from "react-icons/tfi";
import { BsBoxes } from "react-icons/bs";
import { RiEmotionHappyLine } from "react-icons/ri";
import { FaHeartPulse } from "react-icons/fa6";
import BlackROwTwo from './BlackROwTwo';

const BlackRowOne = () => {
  return (
    <>
        <section id="sectionBlackOne">
            <div class="containe">
                <div class="blackFirst">
                    <div >
                        <div className='blackContentBox'>
                            <div>
                                <div><i className='blackContentBoxIcon'><TfiAlarmClock /></i></div>
                            </div>
                                <div className="verticalLine"></div>
                            <div>
                                <h1>500</h1>
                                <p>Hours Worked</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div  className='blackContentBox'>
                            <div>
                                <div><i className='blackContentBoxIcon'><BsBoxes /></i></div>
                            </div>
                                <div className="verticalLine"></div>
                            <div>
                                <h1>50K</h1>
                                <p>Project Finished</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div  className='blackContentBox'>
                            <div>
                                <div><i className='blackContentBoxIcon'><RiEmotionHappyLine /></i></div>
                            </div>
                            <div className="verticalLine"></div>
                            <div>
                                <h1>200K</h1>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='blackContentBox'>
                            <div>
                                <div><i className='blackContentBoxIcon'><FaHeartPulse /></i></div>
                            </div>
                            <div className="verticalLine"></div>
                            <div>
                                <h1>2k</h1>
                                <p>Coffee Drinked</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}


export default BlackRowOne
