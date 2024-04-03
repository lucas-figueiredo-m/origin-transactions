import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { FilterModal } from '../FilterModal';

export const ListHeaderComponent: React.FC = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Transactions</Text>
      <FilterModal />
    </View>
  );
};
