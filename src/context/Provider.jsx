import React from "react";
import MainContext from "./MainContext";

const Provider = ({ children }) => {
  return (
    <div>
      <MainContext.Provider value={{}}>{children}</MainContext.Provider>
    </div>
  );
};

export default Provider;
