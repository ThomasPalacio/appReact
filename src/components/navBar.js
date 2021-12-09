import React from 'react'

const NavBar = () => {
    return (
        <div className="container-fluid nav-main">
                <a class="navbar-brand img-nav" href="index.html">
                    <h1 className="NombreMarca">Lisboa</h1>
                </a>
            <ul className="nav-menu">
                <li className="seccionesNav"><a href="">Inicio</a></li>
                <li className="seccionesNav"><a href="">Productos</a></li>
                <li className="seccionesNav"><a href="">Paquetes</a></li>
                <li className=""><a href="">Contacto</a></li>
            </ul>
        </div>
    )
}

export default NavBar;
