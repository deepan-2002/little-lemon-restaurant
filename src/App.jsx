import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TheNavBar from './components/Navbar/TheNavbar'
import Home from './pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
      <TheNavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
