import { Link } from "react-router-dom";

import "./Navbar.css";
import Preview from '../../assets/preview-logo-large.jpg'

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Preview} alt="Preview logo"/>
        </li>
        <li>
            <Link to="/Home" className="li-link">Home</Link>
        </li>
        <li>
            <Link to="/explore" className="li-link">Explore</Link>
        </li>        
        <li>
            <Link to="/login" className="li-link">Login</Link>
        </li>
        <li>
            <Link to="/signup" className="li-link">Signup</Link>
        </li>
        <li>
            <button className="btn">
                Logout
            </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;