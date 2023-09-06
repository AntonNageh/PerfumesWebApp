import LandingPage from './Pages/LandingPage/LandingPage'
import HomePage from './Pages/HomePage/HomePage'
import Product from './Pages/Product/Product'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import AllProducts from './Pages/AllProducts/AllProducts';
import { useEffect, useState } from 'react';
import Search from './Pages/Search/Search';

function App() {  
  
  const [searchValue, setSearchValue] = useState('');
  useEffect(()=>{
    console.log(searchValue)
  },[searchValue])



  const Images = {
    Perfume1:"/Images/Perfume1.svg",
    Perfume2:"/Images/Perfume2.svg",
    Perfume3:"/Images/Perfume3.svg",
    Perfume4:"/Images/Perfume4.svg",
    Perfume5:"/Images/Perfume5.svg",
    Perfume6:"/Images/Perfume6.svg",
    Perfume7:"/Images/Perfume7.svg",
    Perfume8:"/Images/Perfume8.svg",
    Perfume9:"/Images/Perfume9.svg",
    Perfume10:"/Images/Perfume10.jpg",
    Perfume11:"/Images/Perfume11.jpg",
    Perfume12:"/Images/Perfume12.jpg",
    search:"/Images/Search.svg",
    back:"/Images/back.png",
  }
  return (
    <>
    <BrowserRouter>
    <Routes> 
      <Route element={<LandingPage/>} path='/'></Route>
      <Route element={<HomePage Images={Images} searchValue={searchValue} setSearchValue={setSearchValue}/>} path='/home'></Route>
      <Route element={<Product/>} path='/product/:id'></Route>
      <Route element={<AllProducts Images={Images}/>} path='/products'></Route>
      <Route element={<Search searchValue={searchValue} Images={Images}/>} path='/search'></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
