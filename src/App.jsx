import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,RouterProvider, Outlet
} from "react-router-dom";

import RootLayout from './Layout/RootLayout';

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Resume from './Components/Resume/Resume'
import Contant from './pages/Contact/Contant'
import Portfolio from './pages/Portfolio/Portfolio';
import Blog from './pages/Blog/Blog'



const App = () => {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      
        <Route element= {<RootLayout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element ={<About/>}/>
          <Route path='/resume' element ={<Resume/>}/>
          <Route path='/contact' element={<Contant/>}/>
          <Route path='/portfolio' element = {<Portfolio/>}/>
          <Route path='/blog' element = {<Blog/>}/>

        </Route>
      </>
    )
  );



  return (
    <>
    
    <RouterProvider
      router={router}
    />

    </>
  )
}

export default App

