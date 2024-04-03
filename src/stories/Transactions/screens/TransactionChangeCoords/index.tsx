import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Compass, Map } from '@assets/icons';
import { CoordPickOption } from './components';
import {
  TransactionStackNavigationParams,
  TransactionStackRoutes,
} from '@navigators';
import { useNavigation } from '@react-navigation/native';

type TransactionChangeCoordsNavigation =
  TransactionStackNavigationParams<TransactionStackRoutes.TransactionChangeCoords>;

export const TransactionChangeCoords: React.FC = () => {
  const { navigate } = useNavigation<TransactionChangeCoordsNavigation>();
  return (
    <View style={styles.root}>
      <CoordPickOption
        onPress={() => null}
        label={'transactionChangeCoords.useGpsCoords'}
        Icon={Compass}
      />
      <View style={styles.separator} />
      <CoordPickOption
        onPress={() => navigate(TransactionStackRoutes.TransactionMapPicker)}
        label={'transactionChangeCoords.pickFromMap'}
        Icon={Map}
      />
    </View>
  );
};
