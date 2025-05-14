import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { useFonts } from 'expo-font';
import { Kanit_300Light, Kanit_400Regular, Kanit_500Medium, Kanit_600SemiBold, Kanit_700Bold } from '@expo-google-fonts/kanit';

import AppNavigator from './src/routes';
import { AuthProvider } from './src/contexts/auth';

const linking = {
  prefixes: ['seta://'],
  config: {
    screens: {
      RegisterConfirmScreen: 'register-confirm/:token/:email',
    },
  },
};

export default function App(){
  const [fontsLoaded] = useFonts({
    Kanit_300Light,
    Kanit_400Regular,
    Kanit_500Medium,
    Kanit_600SemiBold,
    Kanit_700Bold,
  });

  return(
    <AuthProvider>
      <NavigationContainer linking={linking}>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  )
}