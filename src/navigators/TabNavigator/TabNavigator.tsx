import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile, TransactionsList } from '@stories';
import { TabRoutes } from './TabNavigator.enum';
import { Money, User } from '@assets/icons';
import { TabNavigatorParamList } from '.';
import { withTabIcon } from './HOC';
import { useTranslation } from '@hooks';
import { Colors } from '@theme';

const Tabs = createBottomTabNavigator<TabNavigatorParamList>();

const UserIcon = withTabIcon(User);
const MoneyIcon = withTabIcon(Money);

export const TabNavigator: React.FC = () => {
  const t = useTranslation();
  return (
    <Tabs.Navigator screenOptions={{ tabBarActiveTintColor: Colors.Primary }}>
      <Tabs.Screen
        name={TabRoutes.TransactionsList}
        component={TransactionsList}
        options={{
          tabBarIcon: MoneyIcon,
          tabBarLabel: t('tabNavigator.transactionsList'),
          headerTitle: t('tabNavigator.transactionsList'),
        }}
      />
      <Tabs.Screen
        name={TabRoutes.Profile}
        component={Profile}
        options={{
          tabBarIcon: UserIcon,
          tabBarLabel: t('tabNavigator.profile'),
          headerTitle: t('tabNavigator.profile'),
        }}
      />
    </Tabs.Navigator>
  );
};
