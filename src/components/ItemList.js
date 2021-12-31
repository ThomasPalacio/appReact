import React from 'react'
import {Item} from './Item'


export const ItemList = ({items}) => {

  return (
    <div>
        <div className='container'>
          <div className='row p-3'>
            <h1 className='titleItemList'>SELECCIONA TU REMERA</h1>
          </div>
          <div className="d-flex flex-row listaProductos">
              {items?.map((item) => (
              <Item {...item} key ={item.id} />))}
          </div>    
        </div>
    </div>    
  )
}
