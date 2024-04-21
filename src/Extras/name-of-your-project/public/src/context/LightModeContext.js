import React, { createContext, useContext, useState } from 'react';

const LightModeContext = createContext();


const LightModeProvider = ({ children }) => {
    const [lightMode, setLightMode] = useState(false);
  
    const toggleLightMode = () => {
      setLightMode((prevMode) => !prevMode);
    };
  
    return (
      <lightModeContext.Provider value={{ lightMode, toggleLightMode }}>
        {children}
      </lightModeContext.Provider>
    );
  };



export {LightModeContext, LightModeProvider};