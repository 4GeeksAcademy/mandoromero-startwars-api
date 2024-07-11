import { useContext, useReducer, createContext } from "react";  // Ensure useReducer is imported
import storeReducer, { initialStore } from "../store";  // Ensure correct path

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore());
  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export default function useGlobalReducer() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useGlobalReducer must be used within a StoreProvider');
  }
  return context;
}