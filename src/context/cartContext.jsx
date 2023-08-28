import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartContainer = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem) => {
    const existingProduct = cartItems.find(
      (product) => product.title === newItem.title
    );

    if (!existingProduct) {
      const updatedCart = [...cartItems, newItem];
      setCartItems(updatedCart);
    }
  };

  const removeFromCart = (title) => {
    const updatedCart = cartItems.filter((item) => item.title !== title);
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
