import React from 'react'
import {useState} from 'react'



const ItemCount = (p) => {
    
    
    const [number, setNumberMas] = useState(p.initial)

    return (
        <div className='container containerContador'>
            <div className='row'>
                <h3>Remera White</h3>
            </div>
            <div className='row parrafoContador d-flex align-items-center justify-content-center'>
                <div className='row'>
                    <div className='col-4'>
                        <button className='botonesContador'>-</button>
                    </div>
                    <div className='col-4'>
                        <p>{number}</p>
                    </div>
                    <div className='col-4'>
                        <button onClick={() => {setNumberMas(number + 1) }} className='botonesContador'>+</button>
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
