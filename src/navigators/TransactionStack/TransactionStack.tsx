import { createStackNavigator } from '@react-navigation/stack';
import { TransactionStackParamsList } from './TransactionStack.type';
import React from 'react';
import {
  TransactionChangeCoords,
  TransactionDetail,
  TransactionMapPicker,
  TransactionReceipt,
} from '@stories';
import { TransactionStackRoutes } from './TransactionStack.enum';
import { transactionsGroupOptions } from './configs';

const Stack = createStackNavigator<TransactionStackParamsList>();

export const TransactionStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={TransactionStackRoutes.TransactionDetails}
    >
      <Stack.Screen
        name={TransactionStackRoutes.TransactionDetails}
        component={TransactionDetail}
      />
      <Stack.Screen
        name={TransactionStackRoutes.TransactionReceipt}
        component={TransactionReceipt}
      />

      <Stack.Group screenOptions={transactionsGroupOptions}>
        <Stack.Screen
          name={TransactionStackRoutes.TransactionChangeCoords}
          component={TransactionChangeCoords}
        />
        <Stack.Screen
          name={TransactionStackRoutes.TransactionMapPicker}
          component={TransactionMapPicker}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
