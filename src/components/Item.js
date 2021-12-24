import React from 'react'

export const Item = ({item}) => {
  return (
   <div className='container d-flex justify-content-center'>
      <div className='card my-4' >
        <img src= {item.pictureURL} className='card-img-top' alt="" />
        <div className='card-body'>
          <h5 className='card-title'>{item.name}</h5>
          <p className='card-text'> Precio: ${item.price}</p>
          <a href="" className=' botonComprar'>Comprar</a>
        </div>
      </div>
   </div>
  )
}

 

