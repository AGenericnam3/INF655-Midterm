import React, { useState } from 'react';

import { LightModeContext } from './context/LightModeContext';
import { DarkModeContext } from './context/DarkModeContext';
const lightTheme = () => {
  const { lightMode, toggleLightMode } = useContext(LightModeContext);
  return (
    <div>
      <h1>{lightMode ? 'light Mode' : 'Light Mode'}</h1>
      <button onClick={toggleLightMode}>Toggle Theme</button>
    </div>
  );
};

const darkTheme = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={toggleDarkMode}>Toggle Theme</button>
    </div>
  );
};

const Cart = () => {
  // Initialize Cart with an empty array
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Function to remove items from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };
  const lightTheme = () => {
    const { lightMode, toggleLightMode } = useContext(LightModeContext);
  
    return (
      <div>
        <h1>{lightMode ? 'light Mode' : 'Light Mode'}</h1>
        <button onClick={toggleLightMode}>Toggle Theme</button>
      </div>
    );
  };
  
  const darkTheme = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  
    return (
      <div>
        <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
        <button onClick={toggleDarkMode}>Toggle Theme</button>
      </div>
    );
  };
  
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default {Cart, lightTheme, darkTheme};
