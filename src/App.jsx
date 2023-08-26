import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className=''>
      <Nav  />
      <div id='outlet'  className='2xl:mx-96 my-40'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
