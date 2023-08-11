import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import NewComponent from './components/NewComponent'
import LoginForm from './components/LoginForm'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(null);

  return (
    <>
      <Nav user={user} />
      <div id='login'>
        <Outlet />
      </div>
    </>
  )
}

export default App
