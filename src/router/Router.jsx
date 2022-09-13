import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../components/Main'
import Home from '../pages/Home'
import Pin from '../pages/Pin'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/main' element={<Main/>}/>
            <Route path='/pin' element={<Pin/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router