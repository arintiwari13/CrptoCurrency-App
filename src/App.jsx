import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Coin from './pages/Coin'
import Footer from './components/Footer'

function App() {
 
  return (
    <div className='w-screen min-h-screen bg-myfav-100  flex flex-col font-inter'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
