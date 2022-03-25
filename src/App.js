import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import ScrollNav from './components/ScrollNav'
import Form from './pages/Form'
import Landing from './pages/Landing'
import './style/css/style.css'
function App() {
  return (
    <div className="app">
      <ScrollNav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/promokoodi/:promocode" element={<Landing />}></Route>
        <Route path="/kilpailuta" element={<Form />} />
      </Routes>
    </div>
  )
}

export default App
