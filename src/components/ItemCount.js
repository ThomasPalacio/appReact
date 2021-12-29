import React from 'react'
import {useState} from 'react'



const ItemCount = (p) => {
    
    
    const [count, setCount] = useState(p.initial)

    const increaseCount = () => {
        count < p.stock && setCount(count + 1)
    }

    const decreaseCount = () => {
        count > p.initial && setCount(count - 1)
    }

    return (
        <div className='container containerContador'>
            <div className='row parrafoContador d-flex align-items-center justify-content-center'>
                <div className='row'>
                    <div className='col-4'>
                        <button onClick={decreaseCount} className='botonesContador'>-</button>
                    </div>
                    <div className='col-4'>
                        <p className='numeroContador'>{count}</p>
                    </div>
                    <div className='col-4'>
                        <button onClick={increaseCount} className='botonesContador'>+</button>
                    </div>
                    
                </div>
            </div>
            <div className='row p-2'>
                <button className='botonesContador'>Agregar al Carrito</button>
            </div>
        </div>
    )
    
}

export default ItemCount
