import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  
  const toggleNav = () => setShowNav(!showNav);
  const [showNav, setShowNav] = useState(false);
  const navClass = "collapse navbar-collapse justify-content-end " + (showNav ? "show" : "");

  return (
    <>
      <nav className="navbar navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <img id='icon' alt='icon' src={logo}></img>
          <span className="fs-4">Navigo</span>

          <button onClick={toggleNav} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-bars red"></i>
          </button>
          <div className={navClass} id="navbarNav">
            <ul className="nav navbar-nav">
            <Link
              onClick={() => setShowNav(false)}
              className="nav-link fw-bold active" 
              to={`/home`}>
              <span>Home</span>
            </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
    
  );
};

export default Navbar;
