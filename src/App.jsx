import { useState } from 'react'
import './App.css'
import DigitalTools from './components/DigitalTools'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import ProductCard from './components/ProductCard'
import Stat from './components/Stat'
import Steps from './components/Steps'
import Workflow from './components/Workflow'
import { ToastContainer } from 'react-toastify'

const getProducts = async () => {
  const res = await fetch('/products.json')
  return res.json()
}

const productPromise = getProducts()

function App() {  
  const [cart, setCart] = useState([])

  return (
    <>
      <Navbar cart={cart}/>
      <Hero />
      <Stat />
      <DigitalTools productPromise={productPromise} cart={cart} setCart={setCart}/>
      <Steps />
      <Pricing />
      <Workflow />
      <Footer />

      <ToastContainer />
    </>
  )
}

export default App
