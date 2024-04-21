import React from 'react';
import { LightModeContext } from './context/LightModeContext';
import { DarkModeContext } from './context/DarkModeContext';
const Product = ({ product }) => {
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
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default {product, lightTheme, darkTheme};