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

const getProducts = async () => {
  const res = await fetch('/public/products.json')
  return res.json()
}

const productPromise = getProducts()

function App() {

  return (
    <>
      {/* <Navbar />
      <Hero />
      <Stat /> */}
      <DigitalTools productPromise={productPromise}/>
      {/* <Steps />
      <Pricing />
      <Workflow />
      <Footer /> */}
    </>
  )
}

export default App
