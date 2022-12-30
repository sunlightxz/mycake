import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import About from './components/About'
import Footer from './components/Footer'
import eclipse from './assets/eclipse.png'
import Made from './components/Made'
import 'mapbox-gl/dist/mapbox-gl.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App relative w-full">
      <img className='absolute top-[-80px] right-0 md:flex hidden -z-10' src={eclipse} alt="" />
      <Navbar/>
      <Home/>
      <Products/>
      <About/>
      <Made/>
      <Footer/>
    </div>
  )
}

export default App
