import LandingPage from './Pages/LandingPage/LandingPage'
import HomePage from './Pages/HomePage/HomePage'
import Product from './Pages/Product/Product'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import AllProducts from './Pages/AllProducts/AllProducts';
import { useEffect, useState } from 'react';
import Search from './Pages/Search/Search';

function App() {  
  const prices = {
    price1 : "450,00",
    price2 : "85$",
    price3 : "140$",
    price4 : "75$",
    price5 : "95$",
    price6 : "135$",
    price7 : "99$",
    price8 : "120$",
  };

  const [searchValue, setSearchValue] = useState('');
  useEffect(()=>{
  },[searchValue])



  const Images = {
    Perfume1:"/Images/Perfume1.svg",
    Perfume2:"/Images/Perfume2.svg",
    Perfume3:"/Images/Perfume3.svg",
    Perfume4:"/Images/Perfume4.svg",
    Perfume5:"/Images/Perfume5.svg",
    Perfume6:"/Images/Perfume6.svg",
    Perfume7:"/Images/Perfume7.svg",
    Perfume8:"/Images/Perfume8.png",
    Perfume9:"/Images/Perfume9.svg",
    Perfume10:"/Images/Perfume10.jpg",
    Perfume11:"/Images/Perfume11.jpg",
    Perfume12:"/Images/Perfume12.jpg",
    search:"/Images/Search.svg",
    back:"/Images/back.png",
    Heart:"/Images/Heart.png",
    Arrowleft:"/Images/Arrow-left.png",
  }
  return (
    <div className='overflow-x-clip'>
      <BrowserRouter>
        <Routes> 
          <Route element={<LandingPage/>} path='/'></Route>
          <Route element={<HomePage prices={prices} Images={Images} searchValue={searchValue} setSearchValue={setSearchValue}/>} path='/home'></Route>
          <Route element={<Product  prices={prices} Images={Images}/>} path='/product/:id'></Route>
          <Route element={<AllProducts Images={Images}/>} path='/products'></Route>
          <Route element={<Search searchValue={searchValue} Images={Images}/>} path='/search'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
