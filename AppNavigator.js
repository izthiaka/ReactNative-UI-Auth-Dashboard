import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/auth/screens/LoginScreen';
import ForgotPasswordScreen from './src/auth/screens/ForgotPasswordScreen';
import VerifyOTPScreen from './src/auth/screens/VerifyOTPScreen';
import ResetPasswordScreen from './src/auth/screens/ResetPasswordScreen';

import DashboardScreen from './src/dashboard/screens/DashboardScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ title: 'Mot de passe oublié' }}
      />
      <Stack.Screen
        name="VerifyOTP"
        component={VerifyOTPScreen}
        options={{ title: 'Code de validation' }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ResetPasswordScreen}
        options={{ headerShown: false }}
      />


      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        // options={{ title: 'Dashboard' }}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
