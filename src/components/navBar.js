import React from 'react'
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div className="container-fluid nav-main">
                <a class="navbar-brand img-nav" href="index.html">
                    <h1 className="NombreMarca">Lisboa</h1>
                </a>
            <ul className="nav-menu d-flex align-items-center">
                <li className="seccionesNav"><a href="">Inicio</a></li>
                <li className="seccionesNav"><a href="">Productos</a></li>
                <li className="seccionesNav"><a href="">Paquetes</a></li>
                <li className="seccionesNav"><a href="">Contacto</a></li>
                <li className="seccionesNav"> <CartWidget /></li>
            </ul>
           
        </div>
    )
}

export default NavBar;
