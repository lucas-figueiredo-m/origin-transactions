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
import { useTranslation } from '@hooks';
import { Colors } from '@theme';

const Stack = createStackNavigator<TransactionStackParamsList>();

export const TransactionStack: React.FC = () => {
  const t = useTranslation();
  return (
    <Stack.Navigator
      initialRouteName={TransactionStackRoutes.TransactionDetails}
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: Colors.Black,
      }}
    >
      <Stack.Screen
        name={TransactionStackRoutes.TransactionDetails}
        component={TransactionDetail}
        options={{
          headerTitle: t('transactionStack.transactionDetail'),
        }}
      />
      <Stack.Screen
        name={TransactionStackRoutes.TransactionReceipt}
        component={TransactionReceipt}
        options={{
          headerTitle: t('transactionStack.transactionReceipt'),
        }}
      />

      <Stack.Group screenOptions={transactionsGroupOptions}>
        <Stack.Screen
          name={TransactionStackRoutes.TransactionChangeCoords}
          component={TransactionChangeCoords}
          options={{
            headerTitle: t('transactionStack.transactionChangeCoords'),
          }}
        />
        <Stack.Screen
          name={TransactionStackRoutes.TransactionMapPicker}
          component={TransactionMapPicker}
          options={{
            headerTitle: t('transactionStack.transactionMapPicker'),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
