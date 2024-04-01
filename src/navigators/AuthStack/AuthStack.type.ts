import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { AuthStackRoutes } from './AuthStack.enum';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackNavigationParams, MainStackRoutes } from '../MainStack';

export type AuthStackParamList = {
  [AuthStackRoutes.SignIn]: undefined;
  [AuthStackRoutes.SignUp]: undefined;
};

export type AuthStackNavigationParams<T extends AuthStackRoutes> =
  CompositeNavigationProp<
    StackNavigationProp<AuthStackParamList, T>,
    MainStackNavigationParams<MainStackRoutes.AuthStack>
  >;

export type AuthStackRouteParams<T extends AuthStackRoutes> = RouteProp<
  AuthStackParamList,
  T
>;
