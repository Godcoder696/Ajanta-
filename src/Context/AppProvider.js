import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [searchDrawer,setSearchDrawer]= useState(false)
    const [navDrawer,setNavDrawer]= useState(false)
    const [navState,setNavState]= useState()

  return (
    <AppContext.Provider
      value={{
        searchDrawer,
        setSearchDrawer,
        navDrawer,
        setNavDrawer,
        navState,
        setNavState
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppState = () => {
  return useContext(AppContext);
};

export default AppProvider;