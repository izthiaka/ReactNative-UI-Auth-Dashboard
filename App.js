import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/auth/screens/LoginScreen';
import ForgotPasswordScreen from './src/auth/screens/ForgotPasswordScreen';
import VerifyOTPScreen from './src/auth/screens/VerifyOTPScreen';
// import DashboardScreen from './src/screens/DashboardScreen';
// import AdminScreen from './src/screens/AdminScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
        {/* <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ title: 'Tableau de bord' }}
        />
        <Stack.Screen
          name="Admin"
          component={AdminScreen}
          options={{ title: 'Administration' }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
