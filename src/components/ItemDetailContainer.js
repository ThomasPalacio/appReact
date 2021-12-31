import React, { useState, useEffect } from 'react';
import  ItemDetail  from './ItemDetail';
import  Data  from '../data/Data';
import Loader from '../assets/images/loader.gif'

import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
 
  const [product, setProductos] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  console.log(itemId);

  useEffect(() => {
    setLoading(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const filter = Data.find((item) => item.id === itemId);

        resolve(filter);
      }, 3000);
    });

    getItems
      .then((res) => {
        setProductos(res);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  return loading ? <img src={Loader}></img> : 
  <ItemDetail {...product} />;
};

export default ItemDetailContainer