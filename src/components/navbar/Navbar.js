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
        
        <li className="nav-btn">
            <Link to="/login">Login</Link>
        </li>
        <li>
            <Link to="/signup">Signup</Link>
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