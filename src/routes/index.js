import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/login';
import RegisterScreen from '../pages/register';
import RegisterConfirmScreen from '../pages/register-confirm';
import PasswordResetScreen from '../pages/password-reset';
import HomeScreen from '../pages/home';
import QRCodeScreen from '../pages/qrcode';

import { useAuth } from '../contexts/auth.js';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="QRCode" component={QRCodeScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="RegisterConfirm" component={RegisterConfirmScreen} />
          {/* <Stack.Screen name="PasswordReset" component={PasswordReset} /> */}
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;