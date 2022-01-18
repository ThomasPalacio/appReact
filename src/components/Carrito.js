import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import ItemCarrito from './ItemCarrito'


const Carrito = () => {

    const {items,removeItem, clearAllItems} = useContext(CartContext)
    
    const clearHandler = () => {
        clearAllItems()
    }

    return (
        <div>
            <h1 className='titleCarrito m-4'>Bienvenid@ a tu Carrito</h1>
            <ul>
          {items.length !== 0 ? (items.map( (i) =>
                    <div>
                    <ItemCarrito key={i.id} item={i} removeItem={removeItem}></ItemCarrito>
                    <button onClick={clearHandler}>Vaciar Carrito</button>
                    </div>
            )
            ) : (
            <h4 className='m-5'>No hay productos en tu carrito</h4>
          )}
        </ul>

        </div>
        
    )
}

export default Carrito




