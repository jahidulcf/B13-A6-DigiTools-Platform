import './App.css'
import DigitalTools from './components/DigitalTools'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Stat from './components/Stat'
import Steps from './components/Steps'
import Workflow from './components/Workflow'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Stat />
      <DigitalTools />
      <Steps />
      <Pricing />

      <Workflow />

      <Footer />
    </>
  )
}

export default App
