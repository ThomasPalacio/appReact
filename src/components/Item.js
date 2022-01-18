import React from 'react'
import { Link } from 'react-router-dom';

export const Item = ({ id, name, image, price }) => {
  return (
   <div className='card my-4 cardItem' >
        <img src= {image} className='card-img-top' alt="" />
        <div className='card-body bodyItem'>
          <h5 className='card-title titleItem'>{name}</h5>
          <p className='card-text textItem'> Precio: ${price}</p>
          <Link to={`/product/${id}`}><button className='botonDetails'>More Details</button></Link>
        </div>
  </div>
  
  )
}

 

