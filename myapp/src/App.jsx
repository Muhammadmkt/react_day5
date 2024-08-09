import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loging from './components/Loging'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Signup2 from './components/Signup2'
import { Route, Routes } from 'react-router-dom'
import Statebasic from './components/Statebasic'
import Wlcome from './components/Welcome'
import Api from './components/Api'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <hi></hi>
      {/* <login/> */}
      {/* <Signup /> */}
      {/* <Statebasic/> */}
      {/* <Wlcome/> */}
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup2/>} />
        <Route path="/l" element={<Loging />} />
        <Route path='/sb' element={<Statebasic />} />
        <Route path='/wl' element={<Wlcome />} /> 
       <Route path='/a' element={<Api/>} />
      </Routes>

    </>
  )
}

export default App
