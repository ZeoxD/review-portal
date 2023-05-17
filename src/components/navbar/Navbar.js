import { Link } from "react-router-dom";

import "./Navbar.css";
import Preview from '../../assets/preview-logo-large.jpg'

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Preview} alt="dojo logo" />
          <span> Le Dojo</span>
        </li>
        
        <li>
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