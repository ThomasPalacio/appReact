import React from 'react'

import  {ItemList}  from './ItemList'
import Data from '../data/Data'
import Loader from '../assets/images/loader.gif'

import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemsListContainer = () => {

  const [items, setItems] = useState([]);

  
  const [loading, setLoading] = useState(true);

  
  const { catId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const myData = catId
          ? Data.filter((item) => item.category === catId)
          : Data;

        resolve(myData);
      }, 1000);
    });

    getItems
      .then((res) => {
        setItems(res);
      })
      .finally(() => setLoading(false));
  }, [catId]);

  
  return loading ? (
    <img src={Loader}></img>
  ) : (
        <div className='productos'>
            <ItemList items={items} />
        </div>
  )
}


export default ItemsListContainer
