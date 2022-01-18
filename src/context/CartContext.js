import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  items: [],
  removeItem: () => {},
  addItem: () => {},
  itemIsInCart:() => {},
  clearAllItems: () => {}
});



 export const CartProvider = ({ children }) => {
  
  const [itemsInCart, setItemsInCart] = useState([])

  useEffect(() => {
    console.log(itemsInCart);}, [itemsInCart])

    const addtoCart = (item) =>{
      setItemsInCart((prevItems) =>{
        return prevItems.concat(item)
      } )
    }

  
    const removeFromCart = (itemId) => {
      setItemsInCart((prevItems) =>{
        return prevItems.filter(i => i.id != itemId)
      })
    }
    
    const isInCar = (itemId) => {
      return itemsInCart.some( i => i.id === itemId)
    }
    
    const clear = () => {
      setItemsInCart([])
    }

    const context = {
    items: itemsInCart,
    addItem: addtoCart,
    removeItem: removeFromCart,
    itemIsInCart:isInCar,
    clearAllItems: clear
    }

    
  
    return (
      <CartContext.Provider
        value={
          context
        }
      >
        {children}
      </CartContext.Provider>
    );
  };
  
