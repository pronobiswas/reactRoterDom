import React from 'react'
import Banner from '../../Components/Bnner/Banner'
import Resume from '../../Components/Resume/Resume'
import BlackRowOne from '../../Components/MyComponent/BlackRow/BlackRowOne'
import MyservicesComponent from '../../Components/MyservicesComponent/MyservicesComponent'
import PriceComponent from '../../Components/PriceComponent/PriceComponent'
import BlackROwTwo from '../../Components/MyComponent/BlackRow/BlackROwTwo'
import MyportFolio from '../../Components/MyportFolio/MyportFolio'
import LatestNewsComponent from '../../Components/LatestNewsComponent/LatestNewsComponent'
import ContactComponent from '../../Components/ContactComponent/ContactComponent'

const Home = () => {
  return (
    <>
      <Banner/>
      <Resume/>
      <BlackRowOne/>
      <MyservicesComponent/>
      <PriceComponent/>
      <BlackROwTwo/>
      <MyportFolio/>
      <LatestNewsComponent/>
      <ContactComponent/>
  
    </>
  )
}

export default Home
