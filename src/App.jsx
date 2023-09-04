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
    console.log(searchValue, "test")
  },[searchValue])



  const Images = {
    Perfume1:"/src/assets/Images/Perfume1.svg",
    Perfume2:"/src/assets/Images/Perfume2.svg",
    Perfume3:"/src/assets/Images/Perfume3.svg",
    Perfume4:"/src/assets/Images/Perfume4.svg",
    Perfume5:"/src/assets/Images/Perfume5.svg",
    Perfume6:"/src/assets/Images/Perfume6.svg",
    Perfume7:"/src/assets/Images/Perfume7.svg",
    Perfume8:"/src/assets/Images/Perfume8.svg"
  }
  return (
    <>
    <BrowserRouter>
    <Routes> 
      <Route element={<LandingPage/>} path='/'></Route>
      <Route element={<HomePage Images={Images} searchValue={searchValue} setSearchValue={setSearchValue}/>} path='/home'></Route>
      <Route element={<Product/>} path='/product/:id'></Route>
      <Route element={<AllProducts Images={Images}/>} path='/products'></Route>
      <Route element={<Search searchValue={searchValue}/>} path='/search'></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
