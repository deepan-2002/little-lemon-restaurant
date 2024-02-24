import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TheNavBar from './components/Navbar/TheNavbar'
import Home from './pages/Home'
import UnderConstruction from './components/UnderConstruction/UnderConstruction'
import Footer from './components/Footer/Footer'
import ReservationForm from './pages/Reservation'
import ConfirmedBooking from './components/ConfirmedBooking/ConfirmedBooking'

function App() {

  return (
    <>
      <BrowserRouter>
      <TheNavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<UnderConstruction/>}/>
        <Route path='/reserve' element={<ReservationForm/>}/>
        <Route path='/contact' element={<UnderConstruction/>}/>
        <Route path='/login' element={<UnderConstruction/>}/>
        <Route path='/confirmed' element={<ConfirmedBooking/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
