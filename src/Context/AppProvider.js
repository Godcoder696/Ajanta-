import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [searchDrawer,setSearchDrawer]= useState(false)
    const [navDrawer,setNavDrawer]= useState(false)
    const [navState,setNavState]= useState()
    let [data,setData]= useState();

    const history= useHistory();

    useEffect(async ()=>{
      
    },[history])

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