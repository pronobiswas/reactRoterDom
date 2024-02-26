import React from 'react'
import './priceComponent.css'

const PriceComponent = () => {
  return (
    <>
      <div className="container" id='PackPriceing'>
        <h2> <span>Packs</span>Pricing </h2>
        <div className="pricecardwarpper">

            <div className="priceCard">
                <h2>Free</h2>
                <div className="price">
                    {/* <sup>$</sup> */}
                    <span className="tk">0</span>
                    <sub>/MO</sub>
                    <ul>
                        <li>5 Project</li>
                        <li>1MB Storage</li>
                        <li>No Domain</li>
                        <li>1 User</li>
                    </ul>
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="priceCard">
                <h2>Basic</h2>
                <div className="price">
                    {/* <sup>$</sup> */}
                    <span className="tk">0</span>
                    <sub>/MO</sub>
                    <ul>
                        <li>5 Project</li>
                        <li>1MB Storage</li>
                        <li>No Domain</li>
                        <li>1 User</li>
                    </ul>
                    <button>Subscribe</button>
                </div>
            </div>

            <div className="priceCard">
                <div className="badge">NEW</div>
                <h2>Exclusive</h2>
                <div className="price">
                    {/* <sup>$</sup> */}
                    <span className="tk">0</span>
                    <sub>/MO</sub>
                    <ul>
                        <li>5 Project</li>
                        <li>1MB Storage</li>
                        <li>No Domain</li>
                        <li>1 User</li>
                    </ul>
                    <button>Subscribe</button>
                </div>
            </div>

            <div className="priceCard">
                <h2>Pro</h2>
                <div className="price">
                    {/* <sup>$</sup> */}
                    <span className="tk">0</span>
                    <sub>/MO</sub>
                    <ul>
                        <li>5 Project</li>
                        <li>1MB Storage</li>
                        <li>No Domain</li>
                        <li>1 User</li>
                    </ul>
                    <button>Subscribe</button>
                </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default PriceComponent
