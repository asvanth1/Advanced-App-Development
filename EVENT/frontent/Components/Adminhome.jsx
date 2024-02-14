// Navbar.jsx
import './Adminhome.css';
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
        {/* <Link to="/vents"> */}
          <a href="#">Create Events</a>
          {/* </Link> */}
        <Link to="/ServicesPage"><a href="#s">View Bookings</a></Link>
        <Link to="/"><a href="#services">Logout</a></Link>
      </div>
    </nav>
    <h1 className='admin-h1'>Admin panel</h1>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <Footer />
    </div>
    </>
  );
}

export default Navbar;
