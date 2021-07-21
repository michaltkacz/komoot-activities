import React, { useContext, useState, useEffect } from 'react';
import useDeepSync from '../hooks/useDeepSync';
import useShallowSync from '../hooks/useShallowSync';

const ToursContext = React.createContext();

export const useTours = () => {
  return useContext(ToursContext);
};

export const ToursProvider = ({ children }) => {
  const { runDeepSync, dsTours, dsToursTotalNumber, dsLoading, dsError } =
    useDeepSync();
  const { runShallowSync, ssTours, ssToursTotalNumber, ssLoading, ssError } =
    useShallowSync();
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [toursTotalNumber, setToursTotalNumber] = useState(0);

  useEffect(() => {
    setTours(dsTours);
  }, [dsTours]);

  useEffect(() => {
    setTours(ssTours);
  }, [ssTours]);

  useEffect(() => {
    setLoading(dsLoading);
  }, [dsLoading]);

  useEffect(() => {
    setLoading(ssLoading);
  }, [ssLoading]);

  useEffect(() => {
    setError(dsError);
  }, [dsError]);

  useEffect(() => {
    setError(ssError);
  }, [ssError]);

  useEffect(() => {
    setToursTotalNumber(dsToursTotalNumber);
  }, [dsToursTotalNumber]);

  useEffect(() => {
    setToursTotalNumber(ssToursTotalNumber);
  }, [ssToursTotalNumber]);

  const value = {
    tours,
    toursTotalNumber,
    runShallowSync,
    runDeepSync,
    loading,
    error,
  };

  return (
    <ToursContext.Provider value={value}>{children}</ToursContext.Provider>
  );
};
