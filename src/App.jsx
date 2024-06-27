import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, Router } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from  './Components/Navbar'

//Pages
import Home from './Pages/Home'
import Allproducts from './Pages/Allproducts';


function App() {


  
 useEffect(()=>{
  AOS.init();
})
  return (
    <>
      <Navbar/>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/all-products'  element={<Allproducts/>}/>

      </Routes>


    </>
  )
}

export default App
