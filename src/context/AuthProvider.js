import { useState } from 'react';
import { useContext, createContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  return (
    <>
      <AuthContext.Provider
        value={{
          token,
          name,
          email,
          setToken,
          setName,
          setEmail
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
