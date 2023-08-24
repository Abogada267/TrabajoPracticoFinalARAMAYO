/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from "react-router-dom";
import TotalItems from '../CartContent/TotalItems';
import "./NavBar.css";

const NavBar = () => {
    return (
    < div className='nav-container'>
            <nav className='navbar'>
                <a className = "navBar_link"href="/">INICIO</a>
                <a className="navBar_link" href="/card">BUSCAR</a>
                <a className="navBar_link" href="/Products">MIS COMPRAS</a>
                <a className="navBar_link" href="#">OFERTAS</a>
                <a className="navBar_link" href="#">CUPONES</a>
                <a className = "navBar_link"href="#">AYUDA</a>
    <h1 className='navbar-logo'>Estudio Juridico Malvina Aramayo & Asociados</h1>           
    <Link className='seeCarrito' to={"/cart"}>🛒<TotalItems/>
                  </Link>
       </nav>
        </div>

    );
};

export default NavBar;