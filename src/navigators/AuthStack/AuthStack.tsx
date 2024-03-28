import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from './AuthStack.type';
import { SignIn } from '@stories';
import { AuthStackRoutes } from './AuthStack.enum';

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AuthStackRoutes.SignIn} component={SignIn} />
      <Stack.Screen name={AuthStackRoutes.SignUp} component={SignIn} />
    </Stack.Navigator>
  );
};
