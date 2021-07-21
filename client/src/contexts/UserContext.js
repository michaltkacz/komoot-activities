import React, { useContext, useState } from 'react';

const UserIdContext = React.createContext();

export const useUser = () => {
  return useContext(UserIdContext);
};

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  // useEffect(() => {
  //   console.log(userId);
  // }, [userId]);

  // useEffect(() => {
  //   const localUserId = localStorage.getItem('user-id');
  //   // local storage items are strings, thus check for 'null'
  //   // if (localUserId !== 'null') {
  //   //   setUserId(localUserId);
  //   // }
  // }, []);

  // useEffect(() => {
  //   if (userId !== null) {
  //     localStorage.setItem('user-id', userId);
  //   }
  // }, [userId]);

  return (
    <UserIdContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserIdContext.Provider>
  );
};
