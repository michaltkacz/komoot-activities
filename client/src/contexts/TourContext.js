import React, { useContext } from 'react';
import useSync from '../hooks/useSync';

const ToursContext = React.createContext();

export const useTours = () => {
  return useContext(ToursContext);
};

export const ToursProvider = ({ children }) => {
  const sync = useSync();

  return <ToursContext.Provider value={sync}>{children}</ToursContext.Provider>;
};
