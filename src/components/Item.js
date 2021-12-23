import React from 'react'

const Item = ({items}) => {
  return (
   <div className='container d-flex justify-content-center'>
      <div className='card my-4' >
        <img src= {items.pictureURL} className='card-img-top' alt="..." />
        <div className='card-body'>
          <h5 className='card-title'>{items.name}</h5>
          <p className='card-text'> Precio: ${items.price}</p>
          <a href="#" className=' botonComprar'>Comprar</a>
        </div>
      </div>
   </div>
  )
}

export default Item

