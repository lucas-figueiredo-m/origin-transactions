import { createStackNavigator } from '@react-navigation/stack';
import { TransactionStackParamsList } from './TransactionStack.type';
import React from 'react';
import { TransactionDetail } from '@stories';
import { TransactionStackRoutes } from './TransactionStack.enum';

const Stack = createStackNavigator<TransactionStackParamsList>();

export const TransactionStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={TransactionStackRoutes.TransactionDetails}
        component={TransactionDetail}
      />
    </Stack.Navigator>
  );
};
