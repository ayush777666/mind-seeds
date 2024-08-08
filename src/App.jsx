import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import Page3rd from './pages/HomePage/Page3rd'
import NavBar from './pages/NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      {/* <Route path='/' element={<HomePage/>}/> */}
      <Route path='/' element={<Page3rd/>}/>
      <Route path='/' element={<NavBar/>}/>

     </Routes>
    </>
  )
}

export default App;
