import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Compass, Map } from '@assets/icons';
import { CoordPickOption } from './components';

export const TransactionChangeCoords: React.FC = () => {
  return (
    <View style={styles.root}>
      <CoordPickOption
        onPress={() => null}
        label={'transactionChangeCoords.useGpsCoords'}
        Icon={Compass}
      />
      <View style={styles.separator} />
      <CoordPickOption
        onPress={() => null}
        label={'transactionChangeCoords.pickFromMap'}
        Icon={Map}
      />
    </View>
  );
};
