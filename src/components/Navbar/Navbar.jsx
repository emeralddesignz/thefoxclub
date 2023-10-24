import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbar w-4/5 mx-auto mt-5">
      <div className="navbar-brand">
        <img src={logo} alt="Company Logo" className="logo" />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item"><button>Volume</button></li>
        <li className="nav-item"><button>Inventory</button></li>
        <li className="nav-item"><button>Select Wallet</button></li>
      </ul>
    </div>
  );
};

export default Navbar;
