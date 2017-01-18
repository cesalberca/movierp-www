import React from 'react';
import {IndexLink} from 'react-router';

import NavbarLink from './NavbarLink';

import './Navbar.css';

const Navbar = ({logo}) => {
  return (
    <navbar className="Navbar">
      <div className="Navbar--skewed">
        <IndexLink to="/" className="Navbar__index">
          <img src={logo} className="Navbar__logo" alt="logo" />
        </IndexLink>
        <NavbarLink to="/download">Download</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
      </div>
    </navbar>
  );
}

export default Navbar;