import { useState } from 'react';
import { useUser } from './../contexts/UserContext';
import { ddbGetTours } from '../database/dexiedb';
// import { useFetch } from 'use-http';

const useShallowSync = () => {
  const { userId } = useUser();
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [toursTotalNumber, setToursTotalNumber] = useState(0);

  // const {
  //   post,
  //   response,
  //   loading: serverLoading,
  //   error: serverError,
  // } = useFetch(`/api/shallowsync/${userId}`);

  // const shallowSyncWithServer = async () => {
  //   const newData = await post(``. {
  //     body:
  //   });
  //   if (response.ok) {
  //     setTours([...tours, ...newData.tours]);
  //     if (page === 0) {
  //       setToursTotalNumber(newData.pages.totalItems);
  //     }
  //     if (page + 1 < newData.pages.totalPages) {
  //       setCurrentPage(page + 1);
  //     }
  //   } else {
  //     setCurrentPage(-1);
  //   }
  // };

  const runShallowSync = async () => {
    setLoading(true);
    setError(false);
    // pobierz wszystkie lokalnie zapisane trasy
    const localTours = await ddbGetTours(userId);
    if (!Array.isArray(localTours)) {
      setTours(null);
      setToursTotalNumber(0);
      setError(true);
      setLoading(false);
      return;
    }

    // // dla kazdej trasy:
    // // pobierz id
    // // pobierz ostatnia date modyfikacji
    // // utworz tablice
    // const toursInfo = localTours.map((tour) => {
    //   return {
    //     userId,
    //     tours: { id: tour.id, lastModified: tour.lastModified },
    //   };
    // });

    // // zrob posta
    // // na backendzie zaktualizuj te trasy ktorych data modyfikacji jest rozna
    // const newData = await post(``, {
    //   body: toursInfo,
    // });

    // // wez responsa
    // // zaktualizuj lokalna baze danych
    // if (response.ok) {

    // }

    // "zwroc" nowe trasy
    setTours(localTours);
    setToursTotalNumber(localTours.length);
    setLoading(false);
  };

  return {
    runShallowSync,
    ssTours: tours,
    ssLoading: loading,
    ssError: error,
    ssToursTotalNumber: toursTotalNumber,
  };
};

export default useShallowSync;
