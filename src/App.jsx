import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TheNavBar from './components/Navbar/TheNavbar'
import Home from './pages/Home'
import UnderConstruction from './components/UnderConstruction/UnderConstruction'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
      <TheNavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<UnderConstruction/>}/>
        <Route path='/reserve' element={<UnderConstruction/>}/>
        <Route path='/contact' element={<UnderConstruction/>}/>
        <Route path='/login' element={<UnderConstruction/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
