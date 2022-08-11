import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'


import Greeting from './components/Greeting'
import Home from './pages/Home'
import About from'./pages/About'
import './styles/App.sass'

export default function App() {
  return (
      <div className="App">
        <Greeting />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </div>
  )
}
