import { LogOut } from '@assets/icons';
import { Colors } from '@theme';

import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useAppDispatch } from '@hooks';
import { SettingsActions, resetTransactionsApiState } from '@store';
import { useNavigation } from '@react-navigation/native';
import { TabNavigationParams, TabRoutes } from '../..';
import { AuthStackRoutes, MainStackRoutes } from '@navigators';
import auth from '@react-native-firebase/auth';
import { AuthService } from '@services';

const hitSlop = { top: 10, right: 10, bottom: 10, left: 10 };

type ProfileNavigation = TabNavigationParams<TabRoutes.Profile>;

export const HeaderRight: React.FC = () => {
  const dispatch = useAppDispatch();
  const { reset } = useNavigation<ProfileNavigation>();

  const logUserOut = async () => {
    if (auth().currentUser) {
      await AuthService.signOut();
    }

    dispatch(SettingsActions.resetStore());
    dispatch(resetTransactionsApiState());
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
  const onPress = () => {
    Alert.alert('Alert', 'Are you sure you want to log out?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Log out',
        onPress: logUserOut,
      },
    ]);
  };

  return (
    <TouchableOpacity style={styles.root} hitSlop={hitSlop} onPress={onPress}>
      <LogOut width={24} height={24} color={Colors.Grey} />
    </TouchableOpacity>
  );
};
