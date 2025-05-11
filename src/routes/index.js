import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/login';
import Register from '../pages/register';
import RegisterConfirm from '../pages/register-confirm';
import PasswordReset from '../pages/password-reset';
import Home from '../pages/home';

import { useAuth } from '../contexts/auth.js';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Home" component={Home} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="RegisterConfirm" component={RegisterConfirm} />
          {/* <Stack.Screen name="PasswordReset" component={PasswordReset} /> */}
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;