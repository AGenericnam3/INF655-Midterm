import { createContext, useReducer, useContext, useEffect } from 'react';
import commerce from './lib/commerce'; // Import Commerce.js
import { LightModeContext } from './context/LightModeContext';
import { DarkModeContext } from './context/DarkModeContext';

const CartStateContext = createContext(null);
const CartDispatchContext = createContext(null);

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

const SET_CART = 'SET_CART';

const initialState = {
  total_items: 0,
  total_unique_items: 0,
  line_items: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, ...action.payload };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getCart();
  }, []);

  const setCart = (payload) => dispatch({ type: SET_CART, payload });

  const getCart = async () => {
    try {
      const cart = await commerce.cart.retrieve();
      setCart(cart);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CartDispatchContext.Provider value={{ setCart }}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCartState = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);
export default {lightTheme, darkTheme};