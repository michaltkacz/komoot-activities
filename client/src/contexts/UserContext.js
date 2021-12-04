import React, { useContext, useEffect, useState } from 'react';

const UserIdContext = React.createContext();

export const useUser = () => {
  return useContext(UserIdContext);
};

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const localUserId = localStorage.getItem('user-id');
    // local storage items are strings, thus check for 'null'
    if (localUserId !== 'null') {
      console.log(localUserId);
      setUserId(localUserId);
    }
  }, []);

  const saveUserId = (newUserId) => {
    if (newUserId) {
      localStorage.setItem('user-id', userId);
      setUserId(newUserId);
    }
  };

  return (
    <UserIdContext.Provider value={{ userId, saveUserId }}>
      {children}
    </UserIdContext.Provider>
  );
};
