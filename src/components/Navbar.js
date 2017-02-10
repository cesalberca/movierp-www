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
      <NavbarLink to="/rooms">Salas</NavbarLink>
      <NavbarLink to="/sessions">Sesiones</NavbarLink>
      <NavbarLink to="/employees">Empleados</NavbarLink>
      <NavbarLink to="/users">Usuarios</NavbarLink>
      <NavbarLink to="/clients">Clientes</NavbarLink>
      <NavbarLink to="/providers">Proveedores</NavbarLink>
      <NavbarLink to="/orders">Pedidos</NavbarLink>
      <NavbarLink to="/products">Productos</NavbarLink>
      <NavbarLink to="/films">Películas</NavbarLink>

    </navbar>
  );
}

export default Navbar;
