import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Gallery from './components/Gallery'
import About from './components/About'
import Footer from './components/Footer'
import Hero_Button from './components/Hero_Button'
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Hero_Button />
      <Partners />
      <Footer />
    </div>
  )
}

export default App
