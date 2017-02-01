import React from 'react';
import {IndexLink} from 'react-router';

import NavbarLink from './NavbarLink';

import logo from './../assets/Icono.png';

import './Navbar.css';

const Navbar = ({handlePathLocation}) => {
  return (
    <navbar className="Navbar">
      <IndexLink onClick={handlePathLocation} to="/" className="Navbar__index">
        <img src={logo} className="Navbar__logo" alt="logo" />
      </IndexLink>
      <NavbarLink onClick={handlePathLocation} to="/cinemas">Cines</NavbarLink>
      <NavbarLink onClick={handlePathLocation} to="/employees">Empleados</NavbarLink>
    </navbar>
  );
}

export default Navbar;
