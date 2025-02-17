"use client";

import { createContext, useState } from "react";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [empModal, setEmpModal] = useState(null);
  const contextValues = { empModal, setEmpModal };
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};
export default AppContextProvider;
