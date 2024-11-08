import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
