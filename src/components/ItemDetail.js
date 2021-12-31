import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = 
({id,
name,
category,
description,
image,
price,
stock
}) => {
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
                <ItemCount initial={1} stock={stock}/>
            </div>
          </div>
        
        
      </div>
    )
}

export default ItemDetail
