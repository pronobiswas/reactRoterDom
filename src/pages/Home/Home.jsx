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

  const [scrollTop, setScrollTop] = useState(0);

 
    const handleScroll = (event) => {

        const { scrollTop, scrollHeight, clientHeight } = event.target;
        const scrollRatio = scrollTop / (scrollHeight - clientHeight);

        setScrollTop(event.currentTarget.scrollTop);
 
        console.log(scrollTop);
        
    };

  return (
    <>
    <div
      className="scrollable-element"
      style={{
          // height: "1600px",
          // overflowY: "scroll",
          scrollbarWidth:"none"

      }}
      // onScroll={handleScroll}
    >
      
        <Banner  scrollTop/>
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
