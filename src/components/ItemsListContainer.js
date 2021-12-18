import React from 'react'
import ItemCount from './ItemCount'


const ItemsListContainer = (props) => {
    return (
        <div>
            <div>
            <h1 className='titleinicio'>{props.greeting}</h1>
            </div>
            <ItemCount initial={1} stock={5} />
        </div>
    )
}


export default ItemsListContainer
