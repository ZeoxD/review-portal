import React from 'react'
import { Link } from "react-router-dom";
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

// styles & images
import "./Navbar.css";
import Preview from '../assets/preview-logo-large.jpg'

function Navbar() {

  const { logout, isPending } = useLogout()
  const { user } = useAuthContext()

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Preview} alt="Preview logo"/>
        </li>
        <div className="list-right">
          {user && ( 
            <React.Fragment>
              <li><Link to="/" className="li-link">Home</Link></li>
              <li><Link to="/explore" className="li-link">Explore</Link></li>    
            </React.Fragment>
          )}  

          {!user && ( 
            <React.Fragment>
              <li><Link to="/login" className="li-link">Login</Link></li>
              <li><Link to="/signup" className="li-link">Signup</Link></li>
            </React.Fragment>
          )}

          {user && ( 
            <React.Fragment>
              <li>
                <Link>
                  {!isPending && <button className="btn" onClick={logout}>Logout</button>}
                  {isPending && <button className="btn" disabled>Logout</button>}
                </Link>
              </li>
            </React.Fragment>
          )}
        </div>
      </ul>
    </div>
  );
}

export default Navbar;