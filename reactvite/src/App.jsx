import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'
import StateHandling from './components/StateHandling'
import ReactuseEffect from './components/ReactuseEffect'  
import Products from './components/Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <div>
    {/* <StateHandling/> */}
    {/* <ReactuseEffect/> */}
    {/* <Products/> */}

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Registration />}></Route>
      </Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
    </Routes>
    </BrowserRouter>

 </div>
  )
}

export default App