import React from 'react'
import './myServicesComponent.css'

import { GiHeartInside } from "react-icons/gi";

const MyservicesComponent = () => {
  return (
    <>
        <section id="service">
            <div class="container">
                <h2 ><span>My</span> Services</h2>
                <div className='ServiceCardParent'>

                    <div className='ServiceCardWarpper'>
                            <div className='ServiceCardIcon'>
                                <GiHeartInside />
                            </div>
                            <div className='ServiceCardDetail'>
                                <h5>lorem</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident, dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! In praesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores suscipit blanditiis, dignissimos quos nesciunt nulla aperiam officia.</p>
                            </div>
                    </div>
                    
                    <div className='ServiceCardWarpper'>
                            <div className='ServiceCardIcon'>
                                <GiHeartInside />
                            </div>
                            
                            <div className='ServiceCardDetail'>
                                <h5 >Asperiores</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident, dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! In praesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores suscipit blanditiis, dignissimos quos nesciunt nulla aperiam officia.</p>
                            </div>
                    </div>

                    <div className='ServiceCardWarpper'>
                            <div className='ServiceCardIcon'>
                                <GiHeartInside />
                            </div>
                            <div className='ServiceCardDetail'>
                                <h5>Tempora</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident, dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! In praesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores suscipit blanditiis, dignissimos quos nesciunt nulla aperiam officia.</p>
                            </div>
                    </div>

                    <div className='ServiceCardWarpper'>
                        <div>
                            <div className='ServiceCardIcon'>
                                <GiHeartInside />
                            </div>
                            <div className='ServiceCardDetail'>
                                <h5>Provident</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident, dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! In praesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores suscipit blanditiis, dignissimos quos nesciunt nulla aperiam officia.</p>
                            </div>
                        </div>
                    </div>

                    <div className='ServiceCardWarpper'>
                        <div>
                            <div className='ServiceCardIcon'>
                                <GiHeartInside />
                            </div>
                            
                            <div className='ServiceCardDetail'>
                                <h5>Consectetur</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident, dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! In praesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores suscipit blanditiis, dignissimos quos nesciunt nulla aperiam officia.</p>
                            </div>
                        </div>
                    </div>

                    <div className='ServiceCardWarpper'>
                        <div>
                            <div className='ServiceCardIcon'>
                                <GiHeartInside />
                            </div>
                            <div className='ServiceCardDetail'>
                                <h5>Veritatis</h5>
                                <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident, dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! In praesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores suscipit blanditiis, dignissimos quos nesciunt nulla aperiam officia.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default MyservicesComponent
