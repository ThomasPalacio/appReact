import React from 'react'
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const categories = [
        { id: 'asfadd', address: '/productos', text: 'Todas' },
        { id: '123asf', address: '/category/basica', text: 'Remeras Basicas' },
        { id: 'sgs3q3', address: '/category/estampada', text: 'Remeras Estampadas' },
      ];

    return (
        <div className="container-fluid nav-main">
                
                <NavLink to={`/`} > <h1 className="NombreMarca">Lisboa</h1>
                </NavLink>
            <ul className="nav-menu d-flex align-items-center">
            <NavLink to={`/`}><li className="seccionesNav">Inicio</li>
            </NavLink>
                <div class="dropdown">
                            <button class="botonProductosNav dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos  
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {categories.map((cat) => {
                            return (
                            <div className="links" key={cat.id}>
                                <NavLink to={cat.address} >
                                {cat.text}
                                </NavLink>
                            </div>
                            );
                            })}
                     {/*    <li><a class="dropdown-item" href="#">Remeras Basicas</li>
                        <li><a class="dropdown-item" href="#">Remeras estampadas</li> */}
                    </ul>
                </div>
                    <NavLink to={`/nosotros`}>
                    <li className="seccionesNav">Nosotros</li> 
                    </NavLink>
                    <NavLink to={`/contacto`}>
                    <li className="seccionesNav">Contacto</li>
                    </NavLink>
                    <NavLink to={`/carrito`}>
                    <li className="seccionesNav"> <CartWidget /></li>
                    </NavLink>
                
            </ul>
           
        </div>
    )
}

export default NavBar;
