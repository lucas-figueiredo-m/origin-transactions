import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { styles } from './styles';
import { Logo } from '@assets/icons';

import { useNavigation } from '@react-navigation/native';
import {
  AuthStackNavigationParams,
  AuthStackRoutes,
  MainStackRoutes,
  TabRoutes,
} from '@navigators';
import { useSelector } from 'react-redux';
import { settingsSelector } from '@store';

type SplashScreenNavigation =
  AuthStackNavigationParams<AuthStackRoutes.SpashScreen>;

export const SplashScreen: React.FC = () => {
  const { keepSignedIn, user } = useSelector(settingsSelector);

  const { reset } = useNavigation<SplashScreenNavigation>();

  const handlePersistedConnection = () => {
    if (keepSignedIn && user.uid !== '') {
      reset({
        index: 0,
        routes: [
          {
            name: MainStackRoutes.TabNavigator,
            params: { screen: TabRoutes.TransactionsList },
          },
        ],
      });
    }
  };

  const handleNotPersistedConnection = () => {
    reset({
      index: 0,
      routes: [
        {
          name: MainStackRoutes.AuthStack,
          params: { screen: AuthStackRoutes.SignIn },
        },
      ],
    });
  };

  useEffect(() => {
    setTimeout(() => {
      if (keepSignedIn && user.uid !== '') {
        handlePersistedConnection();
      } else {
        handleNotPersistedConnection();
      }
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <Logo width={200} height={200} />
      <Text style={styles.title}>Origin Transactions</Text>
    </SafeAreaView>
  );
};
