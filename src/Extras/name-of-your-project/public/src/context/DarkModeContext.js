import React, { createContext, useContext, useState } from 'react';


const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode((prevMode) => !prevMode);
    };
  
    return (
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    );
  };

 export {DarkModeContext, DarkModeProvider};