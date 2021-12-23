import React from 'react'
import Item from './Item'

import Rb from '../assets/images/remera-blanca.jpg'
import Rn from '../assets/images/remera-negra.jpg'
import Rg from '../assets/images/remera-gris.jpg'
import Rr from '../assets/images/remera-roja.jpg'

import { useEffect,useState } from 'react'


const ItemList = () => {

 const [productos, setProductos] = useState([])

 useEffect(() => {
   traerProductos()
 }, [])

  const traerProductos = () =>{
    const nuevaPromesa = new Promise ((resolve,rejected) =>{
      const productos = [
        {name:'Remera Blanca',price:2500,stock:10,pictureURL:Rb, id:1},
        {name:'Remera Negra',price:2500,stock:12,pictureURL:Rn, id:2},
        {name:'Remera Gris',price:2500,stock:8,pictureURL:Rg, id:3},
        {name:'Remera Roja',price:2500,stock:5,pictureURL:Rr, id:4}
      ]
      setTimeout(() => {
        resolve(productos)
      }, 3000);
      
    })
    nuevaPromesa.then(res => setProductos(res))
  }


  return (
    <div className='container mt-5'>
      <h1 className='titleItemList'>Lista de Productos</h1>
      {productos.map( e =>
      <Item items={e} ></Item> )}
      
    </div>
  )
}

export default ItemList
