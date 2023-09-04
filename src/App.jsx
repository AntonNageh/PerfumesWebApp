import LandingPage from './Pages/LandingPage/LandingPage'
import HomePage from './Pages/HomePage/HomePage'
import Product from './Pages/Product/Product'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<LandingPage/>} path='/'></Route>
      <Route element={<HomePage/>} path='/home'></Route>
      <Route element={<Product/>} path='/product/:id'></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
