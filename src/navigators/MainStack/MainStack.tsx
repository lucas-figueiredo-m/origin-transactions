import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MainStackParamList } from './MainStack.type';
import { MainStackRoutes } from './MainStack.enum';
import { SignIn, SignUp } from '../../stories';

const Stack = createStackNavigator<MainStackParamList>();

export const MainStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={MainStackRoutes.SignIn} component={SignIn} />
      <Stack.Screen name={MainStackRoutes.SignUp} component={SignUp} />
    </Stack.Navigator>
  );
};
