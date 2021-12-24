import React from 'react'
import ItemCount from './ItemCount'
import  {ItemList}  from './ItemList'
import { useEffect,useState } from 'react'


import Rb from '../assets/images/remera-blanca.jpg'
import Rn from '../assets/images/remera-negra.jpg'
import Rg from '../assets/images/remera-gris.jpg'
import Rr from '../assets/images/remera-roja.jpg'


const ItemsListContainer = (props) => {

  const [items, setItems] = useState([]);
    
    useEffect(() => {
      const productos = [
        {name:'Remera Blanca',price:2500,stock:10,pictureURL:Rb, id:1},
        {name:'Remera Negra',price:2500,stock:12,pictureURL:Rn, id:2},
        {name:'Remera Gris',price:2500,stock:8,pictureURL:Rg, id:3},
        {name:'Remera Roja',price:2500,stock:5,pictureURL:Rr, id:4}
      ]
      const getItems = new Promise((resolve) => {
        setTimeout(() => {
          
          resolve(productos);
        }, 2000);
      });
  
        getItems.then((res) => {setItems(res)
        });
     
      }, [])

    return (
        <div>
            <div>
              <h1 className='titleinicio'>{props.greeting}</h1>
            </div>
            <ItemCount initial={1} stock={5}/>
            <ItemList items={items} />
        </div>
    )
}


export default ItemsListContainer
