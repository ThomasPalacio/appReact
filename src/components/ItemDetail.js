import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

import ItemCount from './ItemCount'


const ItemDetail = 
(product) => {

  const  {id,name,category,description,image,price,stock} =  product

  const {addItem, itemIsInCart} = useContext(CartContext)
  const [added, setAdded] = useState(false)

  const itemsIsInCart = itemIsInCart(id)

  const addHandler = () => {
    addItem( {id, name, image, price, quantity: 1} )
}
  
 const onAdd =(() =>{
    setAdded(true)
   })
 
   useEffect(() => {
    console.log(added);
  }, [added])


    return (
        <div className="container containerDetail">
          <div className='row'>
            <div className='col-6'>
              <img src={image} alt={`${id}-${name}`} className="imgDetail" />
            </div>
            <div className='col-6 bodyDetail'>
                <h1 className='nameDetail'>{name}</h1>
                <h5 className='catDetail'> Categoria: {category}</h5>
                <h5 className='catDetail'>{description}</h5>
                <h2 className='priceDetail'>${price}</h2>
                {itemsIsInCart ? 
                <h4 className='d-flex align-items-center justify-content-center m-4'>Agregaste el producto al carrito</h4>
                :
                <span></span>
                }
                {!added && 
                <ItemCount addHandler={addHandler} onAdd={onAdd}   initial={1} stock={stock}/>
                }
                 {added &&
                  <div className='d-flex align-items-center justify-content-center m-4'>
                  <Link to="/carrito"><button className='botonesContador'>Terminar compra</button></Link>
                  </div>
                 }
                
            </div>
          </div>
        
        
      </div>
    )
}

export default ItemDetail
