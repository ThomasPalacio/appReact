import React from 'react'
import {Item} from './Item'


export const ItemList = ({items}) => {

  return (
    <div className='container mt-5'>
      <div className='row'>
        <h1 className='titleItemList'>Lista de Productos</h1>
      </div>
      <div className="d-flex flex-row listaProductos">
          {items?.map((item) => (
          <Item {...item} key ={item.id} />))}
      </div>    
    </div>
  )
}
