import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="Navbar">
      <h1 className="brand">Ahmad Raza</h1>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="icon">&#9776;</span>
      </div>
      <ul className={`menu ${showMenu ? 'show' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/skill">Skills</Link></li>
        <li><Link to="/qualification">Education</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact me</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
