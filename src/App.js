import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'


import Nav from './components/Nav'
import Home from './pages/Home'
import Footer from './components/Footer'

export default function App() {
  return (
      <>
        <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </>
  )
}
