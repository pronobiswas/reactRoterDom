import React, { useState } from 'react'
import Banner from '../../Components/Bnner/Banner'
import Resume from '../../Components/Resume/Resume'
import BlackRowOne from '../../Components/MyComponent/BlackRow/BlackRowOne'
import MyservicesComponent from '../../Components/MyservicesComponent/MyservicesComponent'
import PriceComponent from '../../Components/PriceComponent/PriceComponent'
import BlackROwTwo from '../../Components/MyComponent/BlackRow/BlackROwTwo'
import MyportFolio from '../../Components/MyportFolio/MyportFolio'
import LatestNewsComponent from '../../Components/LatestNewsComponent/LatestNewsComponent'
import ContactComponent from '../../Components/ContactComponent/ContactComponent'
import Myscroll from './Myscroll'

const Home = () => {

  const [scrollPosition, setScrollPosition] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("white");
 
    const handleScroll = (event) => {
        const { scrollTop, scrollHeight, clientHeight } = event.target;
        const scrollRatio = scrollTop / (scrollHeight - clientHeight);
 
        setScrollPosition(toString(scrollRatio))
        
        // if (scrollRatio > 0.12) {
        //     setBackgroundColor("lightblue");
        // } else {
        //     setBackgroundColor("white");
        // }
    };

  return (
    <>
    <div
      className="scrollable-element"
      style={{
          height: "1600px",
          overflowY: "scroll",
          scrollbarWidth:"none"

      }}
      onScroll={handleScroll}
    >
      <h1 style={{ position: "fixed", color: "red" }}>
                Scroll Position: {scrollPosition}px
            </h1>
        {/* <Myscroll/> */}
        <Banner  scrollPosition/>
        <Resume/>
        <BlackRowOne/>
        <MyservicesComponent/>
        <PriceComponent/>
        <BlackROwTwo/>
        <MyportFolio/>
        <LatestNewsComponent/>
        <ContactComponent/>
    </div>
    </>
  )
}

export default Home
