import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Company Logo" className="logo" />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">Volume</li>
        <li className="nav-item">Inventory</li>
        <li className="nav-item">Select Wallet</li>
      </ul>
    </div>
  );
};

export default Navbar;
