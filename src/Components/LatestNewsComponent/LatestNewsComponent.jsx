import React from 'react'
import "./LatestNewsComponentStyle.css"

import { TiHeartOutline } from "react-icons/ti";
import { GoComment } from "react-icons/go";


const LatestNewsComponent = () => {
  return (
    <>
      <section id="latestNews">
        <div className="container">
            <h2>Latext <span>News</span></h2>
            <div className="newsBox">
                <div className="newsImage">
                    <img src="mypic.jpg" alt="" />
                </div>
                <div className="newsContent">
                    <h3>Consectetur adipisicing elit</h3>
                    <p className="newsFeadback">
                        <span>By: Admin</span>
                        <span><TiHeartOutline className='love'/> 234</span>
                        <span><GoComment />123</span>
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique neque esse nemo reprehenderit quasi, facere corporis fuga cupiditate quae tempore quia at sit! Doloribus est error maxime dolores cupiditate velit assumenda laudantium libero, exercitationem blanditiis perspiciatis ipsam architecto vo
                    </p>
                    <h5>
                        Necessitatibus nihil impedit! Ex nisi eveniet, dolor aliquid consequuntur repudiandae.
                    </h5>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia totam fuga, animi deleniti aperiam accusantium omnis harum reprehenderit nisi, saepe temporibus veniam, incidunt modi est tempora velit quas consectetur ipsum?
                    </p>
                    <a href="#">Read More »</a>
                </div>
            </div>
            <div className="newsBox">
                <div className="newsImage">
                    <img src="mypicone.jpg" alt="" />
                </div>
                <div className="newsContent">
                    <h3>Consectetur adipisicing elit</h3>
                    <p className="newsFeadback">
                        <span>By: Admin</span>
                        <span><TiHeartOutline className='love'/> 234</span>
                        <span><GoComment />123</span>
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique neque esse nemo reprehenderit quasi, facere corporis fuga cupiditate quae tempore quia at sit! Doloribus est error maxime dolores cupiditate velit assumenda laudantium libero, exercitationem blanditiis perspiciatis ipsam architecto voluptatibus voluptas, deleniti nulla laborum animi iusto.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia totam fuga, animi deleniti aperiam accusantium 
                    </p>
                    <a href="#">Read More »</a>
                </div>
            </div>
            <div className="newsBox">
                <div className="newsImage">
                    <img src="mypic3.jpg" alt="pic" />
                </div>
                <div className="newsContent">
                    <h3>Consectetur adipisicing elit</h3>
                    <p className="newsFeadback">
                        <span>By: Admin</span>
                        <span><TiHeartOutline className='love'/> 234</span>
                        <span><GoComment />123</span>
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique neque esse nemo reprehenderit quasi, facere corporis fuga cupiditate quae tempore quia at sit! Doloribus est error maxime dolores cupiditate velit assumenda laudantium libero, exercitationem blanditiis perspiciatis ipsam architecto voluptatibus voluptas, deleniti nulla laborum animi iusto.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia totam fuga, animi deleniti aperiam accusantium omnis harum reprehenderit nisi, saepe temporibus veniam, incidunt modi est tempora velit quas consectetur ipsum?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, eos. Lorem ipsum dolor sit, amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor,
                    </p>
                    <a href="#">Read More »</a>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default LatestNewsComponent
