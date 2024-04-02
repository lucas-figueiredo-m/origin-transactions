import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { MainStackRoutes } from './MainStack.enum';
import { AuthStackParamList } from '../AuthStack';
import { StackNavigationProp } from '@react-navigation/stack';
import { TabNavigatorParamList } from '../TabNavigator';

export type MainStackParamList = {
  [MainStackRoutes.AuthStack]: NavigatorScreenParams<AuthStackParamList>;
  [MainStackRoutes.TabNavigator]: NavigatorScreenParams<TabNavigatorParamList>;
};

export type MainStackRouteParams<T extends MainStackRoutes> = RouteProp<
  MainStackParamList,
  T
>;

export type MainStackNavigationParams<T extends MainStackRoutes> =
  StackNavigationProp<MainStackParamList, T>;
