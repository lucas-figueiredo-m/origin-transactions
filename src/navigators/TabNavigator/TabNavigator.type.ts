import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { TabRoutes } from '.';
import { MainStackNavigationParams, MainStackRoutes } from '../MainStack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type TabNavigatorParamList = {
  [TabRoutes.Profile]: undefined;
  [TabRoutes.TransactionsList]: undefined;
};

export type TabNavigationParams<T extends TabRoutes> = CompositeNavigationProp<
  MainStackNavigationParams<MainStackRoutes.AuthStack>,
  BottomTabNavigationProp<TabNavigatorParamList, T>
>;

export type TabRouteParams<T extends TabRoutes> = RouteProp<
  TabNavigatorParamList,
  T
>;

export type TabBarIconProps = {
  color: string;
  size: number;
  focused: boolean;
};
