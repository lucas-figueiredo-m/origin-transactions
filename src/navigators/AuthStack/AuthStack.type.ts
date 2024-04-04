import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { AuthStackRoutes } from './AuthStack.enum';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackNavigationParams, MainStackRoutes } from '../MainStack';

export type AuthStackParamList = {
  [AuthStackRoutes.SpashScreen]: undefined;
  [AuthStackRoutes.SignIn]: undefined;
  [AuthStackRoutes.SignUp]: undefined;
};

export type AuthStackNavigationParams<T extends AuthStackRoutes> =
  CompositeNavigationProp<
    MainStackNavigationParams<MainStackRoutes.AuthStack>, // First goes the parent navigator
    StackNavigationProp<AuthStackParamList, T> // Then the child navigator and specified screen
  >;

export type AuthStackRouteParams<T extends AuthStackRoutes> = RouteProp<
  AuthStackParamList,
  T
>;
