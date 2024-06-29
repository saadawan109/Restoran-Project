import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, Router } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from  './Components/Navbar'

//Pages
import Home from './Pages/Home'
import Allproducts from './Pages/Allproducts';
import ProductDetail from './Pages/ProductDetail';
import Dashboard from './Pages/Dashboard';
import EditProduct from './Pages/EditProduct';
import AddProduct from './Pages/AddProduct';



function App() {


  
 useEffect(()=>{
  AOS.init();
})
  return (
    <>
      <Navbar/>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/all-products/:id?'  element={<Allproducts/>}/>
        <Route path='/product-detail/:id' element={<ProductDetail />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/edit/:id' element={<EditProduct />} />
        <Route path='/add' element={<AddProduct />} />

      </Routes>


    </>
  )
}

export default App
