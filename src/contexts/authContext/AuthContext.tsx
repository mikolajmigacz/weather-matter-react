import { createContext, useContext, useEffect, useState } from 'react';

import { onAuthStateChanged, User } from '@firebase/auth';

import { auth } from '../../config/firebase';
import { AuthService } from '../../services/auth/auth.service';

import { AuthContextType } from './AuthContext.types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    const response = await AuthService.login({ email, password });
    if (response.error) throw new Error(response.error);
  };

  const register = async (email: string, password: string): Promise<void> => {
    const response = await AuthService.register({ email, password });
    if (response.error) throw new Error(response.error);
  };

  const logout = async (): Promise<void> => {
    const { error } = await AuthService.logout();
    if (error) throw new Error(error);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
