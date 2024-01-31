// Navbar.jsx
import './Navbar.css';
import BodyContent from "./Bodycontent";
import Footer from "./Footer";
import ServicesPage from './ServicesPage';
import Login from './Login'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
    <div className="gh">

    <nav className="navbar">
      <div className="brand">Event Management System</div>
      <div className="menu">
        <a href="#home">Home</a>
        <Link to="/Events"><a href="*">Events</a></Link>
        <Link to="/ServicesPage"><a href="#services">Services</a></Link>
        <a href="#">Contact</a>
        <Link to="/"><a href="#services">Logout</a></Link>
      </div>
    </nav>
    <BodyContent />
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <Footer />
    </div>
    </>
  );
}

export default Navbar;
