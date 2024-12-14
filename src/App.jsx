import React from 'react'
// import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar2 from './components/Navbar2';
const App = () => {
  return (
    <div style={{backgroundColor:'#181414'}}>
      <div class='bg'>
        {/* <Navbar/> */}
        <Navbar2/>
        <Home/>
        <Services/>
        <About/>
        <Clients/>
        <Reviews/>
        <Contact/>
        <Footer/>
    </div>
    </div>
  )
}

export default App