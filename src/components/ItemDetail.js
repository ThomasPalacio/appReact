import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = 
({id,name,category,description,image,price,stock}) => {


  const [added, setAdded] = useState(false)

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
                {!added && 
                <ItemCount onAdd={onAdd} initial={1} stock={stock}/>
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
