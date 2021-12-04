import { useState } from 'react';
import { useFetch } from 'use-http';
import { useUser } from '../contexts/UserContext';
import { ddbPutTours, ddbDeleteTours, ddbGetTours } from '../database/dexiedb';

const useSync = () => {
  const { userId } = useUser();
  const [tours, setTours] = useState([]);

  const { get, response, loading, error } = useFetch(`/api/deepsync/${userId}`);

  const runDeepSync = async () => {
    ddbDeleteTours(userId);

    const limit = 25;
    const newTours = [];
    let currentPage = 0;
    let totalPages = 1;

    while (currentPage < totalPages) {
      const newData = await get(`?page=${currentPage}&limit=${limit}`);
      if (response.ok) {
        newTours.push(...newData.tours);
        totalPages = newData.pages.totalPages;
      }
      currentPage += 1;
    }

    setTours(newTours);

    ddbPutTours(userId, newTours);
  };

  const runShallowSync = async () => {
    const localTours = await ddbGetTours(userId);
    console.log(localTours);
    if (!Array.isArray(localTours)) {
      setTours([]);
      return;
    }

    setTours(localTours);
  };

  return {
    runDeepSync,
    runShallowSync,
    tours,
    loading,
    error,
  };
};

export default useSync;
