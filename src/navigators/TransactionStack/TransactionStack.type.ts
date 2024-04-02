import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { TransactionStackRoutes } from './TransactionStack.enum';
import { MainStackNavigationParams, MainStackRoutes } from '../MainStack';
import { StackNavigationProp } from '@react-navigation/stack';

export type TransactionStackParamsList = {
  [TransactionStackRoutes.TransactionDetails]: {
    id: number;
  };
  [TransactionStackRoutes.TransactionReceipt]: {
    receiptUrl: string | null;
  };
};

export type TransactionStackNavigationParams<T extends TransactionStackRoutes> =
  CompositeNavigationProp<
    MainStackNavigationParams<MainStackRoutes.TransactionStack>, // First goes the parent navigator
    StackNavigationProp<TransactionStackParamsList, T> // Then the child navigator and specified screen
  >;

export type TransactionStackRouteParams<T extends TransactionStackRoutes> =
  RouteProp<TransactionStackParamsList, T>;
