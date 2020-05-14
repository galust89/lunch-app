import React, { useContext, createContext } from "react";
import { reducer, initialState } from "./reducer";
import useCustomReducer from "./useCustomReducer";

const GlobalStateProvider = createContext();
const GlobalDispatchProvider = createContext();

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useCustomReducer(reducer, initialState, true);

  return (
    <GlobalStateProvider.Provider value={state}>
      <GlobalDispatchProvider.Provider value={dispatch}>
        {children}
      </GlobalDispatchProvider.Provider>
    </GlobalStateProvider.Provider>
  );
};

const useGlobalStateContext = () => {
  const context = useContext(GlobalStateProvider);
  if (!context) {
    throw new Error("useTodoStateContext must be used within a TodoProvider");
  }
  return context;
};

const useGlobalDispatchContext = () => {
  const context = useContext(GlobalDispatchProvider);
  if (!context) {
    throw new Error(
      "useTodoDispatchContext must be used within a TodoProvider"
    );
  }
  return context;
};

export { useGlobalStateContext, useGlobalDispatchContext };

export default GlobalProvider;
