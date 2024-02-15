import React from "react";
import { Link , useLocation} from "react-router-dom";

function Header() {
    const location = useLocation()
    console.log(location)
    
  return (
    <>
      <header className="header-section">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <a href="index.html">
                <img src="assets/images/logo/logo.png" alt="logo" />
              </a>
            </div>
            <ul className="menu">
              <li>
                <Link to="/" className={location.pathname === '/' ? "active" : ''} >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/forgot" className={location.pathname === '/forgot' ? "active" : ''}>movies</Link>
              </li>

              <li className="header-button pr-0">
                <Link to="/login">Sign Up / Log In </Link>
              </li>
            </ul>
            <div className="header-bar d-lg-none">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
