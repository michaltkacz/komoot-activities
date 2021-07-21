import { useState, useEffect } from 'react';
import { useFetch } from 'use-http';
import { useUser } from './../contexts/UserContext';
import { ddbPutTours, ddbDeleteTours } from '../database/dexiedb';

const useDeepSync = () => {
  const { userId } = useUser();
  const [tours, setTours] = useState([]);
  const [currentPage, setCurrentPage] = useState(-1);
  const [toursTotalNumber, setToursTotalNumber] = useState(0);

  const { get, response, loading, error } = useFetch(`/api/deepsync/${userId}`);

  const deepSyncWithServer = async (page, limit) => {
    const newData = await get(`?page=${page}&limit=${limit}`);
    if (response.ok) {
      setTours([...tours, ...newData.tours]);
      if (page === 0) {
        setToursTotalNumber(newData.pages.totalItems);
      }
      if (page + 1 < newData.pages.totalPages) {
        setCurrentPage(page + 1);
      }
    } else {
      setCurrentPage(-1);
    }
  };

  useEffect(() => {
    if (currentPage === -1) return;
    deepSyncWithServer(currentPage, 25);

    // if (currentPage >= 2) return;
    // deepSyncWithServer(currentPage, 1);
  }, [currentPage]);

  useEffect(() => {
    ddbPutTours(userId, tours);
  }, [tours]);

  const runDeepSync = () => {
    ddbDeleteTours(userId);
    setCurrentPage(0);
  };

  return {
    runDeepSync,
    dsTours: tours,
    dsToursTotalNumber: toursTotalNumber,
    dsLoading: loading,
    dsError: error,
  };
};

export default useDeepSync;
