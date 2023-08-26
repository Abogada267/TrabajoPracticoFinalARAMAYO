/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import TotalItems from '../CartContent/TotalItems';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <Link className="navBar_link" to="/">INICIO</Link>
        <Link className="navBar_link" to="/productos/tiposdetramites">BUSCAR</Link>
        <Link className="navBar_link" to="/productos/miscompras">MIS COMPRAS</Link>
        <Link className="navBar_link" to="/productos/modelo">MODELOS</Link>
        <Link className="navBar_link" to="/productos/novedades">CUPONES</Link>
        <Link className="navBar_link" to="/productos/ayuda">AYUDA</Link>
        <h1 className='navbar-logo'>Estudio Juridico Malvina Aramayo & Asociados</h1>
        <Link className='seeCarrito' to="/cart">🛒<TotalItems/></Link>
      </nav>
    </div>
  );
};

export default NavBar;
