import './Navbar.css'
import logo from '../assets/logo_alb.png';

const Navbar = () => {
  return (
    <header className="header">
        <img className="logo" src={logo} alt='Logo'></img>
        <nav className="navbar">
            <a href="">Home</a>
            <a href="">Services</a>
            <a href="">About us</a>
            <a href="">Clients</a>
            <a href="">Reviews</a>
            <a href="">Contact</a>
        </nav>
        </header>
  )
}

export default Navbar