import React, { useState } from 'react';
import PMSlogo from '../../assets/PMSlogo.png'
import { Link } from "react-router-dom";

import '../../App.css';


function Header() {

  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <div className="logo">
        <img src={PMSlogo}  />
      </div>
      {/* <nav className="navbar"> */}
      <nav className={ isActive ? "navbar active" : "navbar"}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact Us</a>
        <a href="#">News</a>
        <a href="#">Reviews</a>
        {/* <Link to= "/Signup" >Sign up</Link> */}
      </nav>
      {/* <div className="right-icons">
        <div id="menu-bars" className="fas fa-bars"></div> */}
              <div className="right-icons" onClick={toggleNavbar}>
              <div id="menu-bars"  className={isActive ? "fas fa-times" : "fas fa-bars"}></div>
      </div>
      <div className="btn">
        <Link to= "/login" >Login</Link>
        </div>
    </header>




  )
}

export default Header;
