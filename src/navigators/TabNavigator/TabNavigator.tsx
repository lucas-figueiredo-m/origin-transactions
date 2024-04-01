import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile, TransactionsList } from '@stories';
import { TabRoutes } from './TabNavigator.enum';

const Tabs = createBottomTabNavigator();

export const TabNavigator: React.FC = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name={TabRoutes.TransactionsList}
        component={TransactionsList}
      />
      <Tabs.Screen name={TabRoutes.Profile} component={Profile} />
    </Tabs.Navigator>
  );
};
