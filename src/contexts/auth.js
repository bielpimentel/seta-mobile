import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const isTokenValid = (token) => {
    try {
      const decoded = jwtDecode(token);
      const now = Date.now() / 1000;
      return decoded.exp && decoded.exp > now;
    } catch (e) {
      return false;
    }
  };

  const loadToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token && isTokenValid(token)) {
      setAuthToken(token);
    } else {
      await AsyncStorage.removeItem('token');
      setAuthToken(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadToken();
  }, []);

  const login = async (token) => {
    await AsyncStorage.setItem('token', token);
    setAuthToken(token);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout, isAuthenticated: !!authToken }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);