import React from 'react';
import Product from './product';
import { LightModeContext } from './context/LightModeContext';
import { DarkModeContext } from './context/DarkModeContext';
const Products = ({ products }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
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

export default {products, lightTheme, darkTheme};