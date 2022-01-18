import React from 'react'

const ItemCarrito = ({item, removeItem}) => {

    const removeHandler = () => {
        removeItem(item.id)
    }
    
    return (
            <div key={item.id} className="card mb-3 cardCart">
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={item.image} className="img-fluid rounded-start imgCart" alt=""/>
                            </div>
                            <div className="col-md-4">
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">${item.price}</p>
                                <p className="card-text"><small className="text-muted">Cantidad: {item.quantity}</small></p>
                            </div>
                            </div>
                            <div className="col-md-4">
                            <div className="card-body">
                              <button onClick={removeHandler} className='botonesContador'>Eliminar</button>
                            </div>
                            </div>
                        </div>
                    </div>
    )
}

export default ItemCarrito
