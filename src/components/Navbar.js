import React from 'react';
import {IndexLink} from 'react-router';

import NavbarLink from './NavbarLink';

import logo from './../assets/logo.svg';

import './Navbar.css';

const Navbar = () => {
  return (
    <navbar className="Navbar">
      <IndexLink to="/" className="Navbar__index">
        <img src={logo} className="Navbar__logo" alt="logo" />
      </IndexLink>
      <NavbarLink to="/cinemas">Cines</NavbarLink>
      <NavbarLink to="/employees">Empleados</NavbarLink>
      <NavbarLink to="/users">Usuarios</NavbarLink>
    </navbar>
  );
}

export default Navbar;
