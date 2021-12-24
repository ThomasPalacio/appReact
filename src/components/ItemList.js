import React from 'react'
import {Item} from './Item'


export const ItemList = ({items}) => {

  return (
    <div className='container mt-5'>
      <h1 className='titleItemList'>Lista de Productos</h1>
    <ul>
      {items.map((item) => (
        <Item item={item} />))}
    </ul>
      
     
    </div>
  )
}
