import React from 'react'
import './contactComponentStyle.css'
import { GiRotaryPhone } from "react-icons/gi";
import { TbMapPin2 } from "react-icons/tb";
import { RiMailUnreadLine } from "react-icons/ri";

const ContactComponent = () => {
  return (
    <>
      <div id="contactSection">
        <div className="container contactWarpper">
            <div className="from">
                <h2>Send a Message</h2>
                <form>
                    <input type="text" id='fullname' name='fullname' placeholder='*Enter Your Full name' />

                    <input type="mail" id='email' name='emai' placeholder='Your Mail haere'/>

                    <textarea name="opinion" id="opinion" cols="30" rows="10"></textarea>
                    <input type="submit" value="Send Message"/>
                </form>
            </div>
            <div className="address">
                <h2>Get in touch</h2>
                <ul>
                    <li>
                        <div className="iconBox">
                        <GiRotaryPhone />
                        </div>
                        <div className="addresstext">
                            <h4>Phone:</h4>
                            <p>+8801531881596</p>
                        </div>
                    </li>
                    <li>
                        <div className="iconBox">
                        <TbMapPin2 />
                        </div>
                        <div className="addresstext">
                            <h4>Address:</h4>
                            <p>12345 Fake ST NoWhere AB Country</p>
                        </div>
                    </li>
                    <li>
                        <div className="iconBox">
                        <RiMailUnreadLine />
                        </div>
                        <div className="addresstext">
                            <h4>Email:</h4>
                            <p>biswaspronob@outlook.com</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default ContactComponent
