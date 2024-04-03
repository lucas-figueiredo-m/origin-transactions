import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { MainStackParamList } from './MainStack.type';
import { MainStackRoutes } from './MainStack.enum';
import { AuthStack } from '../AuthStack';
import { screenOptions } from './config';
import { TabNavigator } from '../TabNavigator';
import { TransactionStack } from '../TransactionStack';

const Stack = createStackNavigator<MainStackParamList>();

export const MainStack: React.FC = () => {
  // TODO: add a SplashScreen to decide wheter to show AuthStack or TabNavigator
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={MainStackRoutes.AuthStack} component={AuthStack} />
      <Stack.Screen
        name={MainStackRoutes.TabNavigator}
        component={TabNavigator}
      />
      <Stack.Screen
        name={MainStackRoutes.TransactionStack}
        component={TransactionStack}
      />
    </Stack.Navigator>
  );
};
