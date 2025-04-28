// import {createContext} from "react";


// export  const AppContext = createContext()

import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  
  const getRecipeById = async (id) => {
    // Fetch the recipe data by ID from the API (replace with actual API call)
    const response = await fetch(`/api/recipes/${id}`);
    const data = await response.json();
    return data;  // Return the fetched recipe data
  };

  return (
    <AppContext.Provider value={{ getRecipeById }}>
      {children}
    </AppContext.Provider>
  );
};

