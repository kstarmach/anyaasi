import './App.css'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='font-poppins'>
      <Nav />
      <div id='outlet' className='sm:mx-20'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
