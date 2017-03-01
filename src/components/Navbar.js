import React from 'react';
import { Icon } from 'react-fa';
import { IndexLink } from 'react-router';

import NavbarLink from './NavbarLink';

import logo from './../assets/logo.svg';

import './Navbar.css';

const Navbar = ({auth, isActive}) => {
  return (
      <navbar>
      {isActive ? (
        <div className="Navbar">
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
          <button className="btn btn--dark Navbar__logout" onClick={auth.logout.bind(this)}>
            <Icon name="sign-out"/>
            <span>Cerrar sesión</span>
          </button>
        </div>
      ) : (
        <div className="Navbar">
          <IndexLink to="/" className="Navbar__index">
            <img src={logo} className="Navbar__logo" alt="logo" />
          </IndexLink>
          <NavbarLink to="/erp">ERP</NavbarLink>
        </div>
      )}
      </navbar>
  );
}

export default Navbar;
