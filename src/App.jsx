import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Nav  />
      <div id='outlet'>
        <Outlet />
      </div>
    </>
  )
}

export default App
