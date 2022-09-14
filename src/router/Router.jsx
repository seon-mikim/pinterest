import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../components/Main'
import Home from '../pages/Home'
import Pin from '../pages/Pin'
import AddPin from '../pages/AddPin'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/main' element={<Main/>}/>
            <Route path='/pin' element={<Pin/>}/>
            <Route path='/addpin' element={<AddPin/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router