import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from './AuthStack.type';
import { SignIn, SignUp, SplashScreen } from '@stories';
import { AuthStackRoutes } from './AuthStack.enum';
import { screenOptions } from './config';

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={AuthStackRoutes.SpashScreen}
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name={AuthStackRoutes.SpashScreen}
        component={SplashScreen}
      />
      <Stack.Screen name={AuthStackRoutes.SignIn} component={SignIn} />
      <Stack.Screen name={AuthStackRoutes.SignUp} component={SignUp} />
    </Stack.Navigator>
  );
};
