import React from 'react';
import { Text, View } from 'react-native';
import { FilterButton } from '../FilterButton';
import { styles } from './styles';

type ListHeaderComponentProps = {
  onFilterPress?: () => void;
  isFilterActive: boolean;
};

export const ListHeaderComponent: React.FC<ListHeaderComponentProps> = ({
  onFilterPress,
  isFilterActive,
}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Transactions</Text>
      <FilterButton isFilterActive={isFilterActive} onPress={onFilterPress} />
    </View>
  );
};
