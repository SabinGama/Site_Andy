import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App = () => {
  return (
    <div style={{backgroundColor:'#181414'}}>
      <div class='bg'>
        <Navbar/>
        <Home/>
        <Services/>
        <About/>
        <Clients/>
        <Reviews/>
        <Contact/>
    </div>
    </div>
  )
}

export default App