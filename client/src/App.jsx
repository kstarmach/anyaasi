import './App.css'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='font-poppins'>
      <Nav />
      <div id='outlet'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
