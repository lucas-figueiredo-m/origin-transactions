import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Compass, Map } from '@assets/icons';
import { CoordPickOption } from './components';
import {
  TransactionStackNavigationParams,
  TransactionStackRouteParams,
  TransactionStackRoutes,
} from '@navigators';
import { useNavigation, useRoute } from '@react-navigation/native';

import { useGpsCoords } from './hooks';

type TransactionChangeCoordsNavigation =
  TransactionStackNavigationParams<TransactionStackRoutes.TransactionChangeCoords>;

type TransactionChangeCoordsRoute =
  TransactionStackRouteParams<TransactionStackRoutes.TransactionChangeCoords>;

export const TransactionChangeCoords: React.FC = () => {
  const { navigate } = useNavigation<TransactionChangeCoordsNavigation>();
  const { params } = useRoute<TransactionChangeCoordsRoute>();
  const { onGpsPress } = useGpsCoords(params.id);

  return (
    <View style={styles.root}>
      <CoordPickOption
        onPress={onGpsPress}
        label={'transactionChangeCoords.useGpsCoords'}
        Icon={Compass}
      />
      <View style={styles.separator} />
      <CoordPickOption
        onPress={() =>
          navigate(TransactionStackRoutes.TransactionMapPicker, {
            id: params.id,
          })
        }
        label={'transactionChangeCoords.pickFromMap'}
        Icon={Map}
      />
    </View>
  );
};
