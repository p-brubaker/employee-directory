import { createContext, useContext, useState, useMemo } from 'react';
import { getUser } from '../services/users';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const loggedInUser = getUser();
  const [user, setUser] = useState(
    loggedInUser ? { id: loggedInUser.id, email: loggedInUser.email } : {}
  );

  const value = useMemo(() => ({ user, setUser }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('usUser must be used within a UserProvider');
  }

  return context;
};

export { UserProvider, useUser };
