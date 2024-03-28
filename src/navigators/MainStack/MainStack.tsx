import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MainStackParamList } from './MainStack.type';
import { MainStackRoutes } from './MainStack.enum';
import { AuthStack } from '../AuthStack';

const Stack = createStackNavigator<MainStackParamList>();

export const MainStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={MainStackRoutes.AuthStack} component={AuthStack} />
    </Stack.Navigator>
  );
};
