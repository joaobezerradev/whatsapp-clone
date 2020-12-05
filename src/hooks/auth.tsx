import React, { useState, useCallback, createContext, useContext } from 'react';
import api, { UserCollection } from '../services/api';

interface AuthState {
  user: UserCollection;
}

interface AuthContextData {
  user: UserCollection;
  signIn(): Promise<void>;
  signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);

  const signIn = useCallback(async () => {
    const { user } = await api.googleLogin();
    if (user) {
      const userData = {
        id: user.uid,
        name: user.displayName || '',
        avatar: user.photoURL || '',
      };
      await api.addUser(userData);
      setData({ user: userData });
    }
  }, []);

  const signOut = useCallback(async () => {
    await api.googleLogOut();
  }, []);

  return (
    <AuthContext.Provider value={{ user: data?.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { useAuth, AuthProvider };
