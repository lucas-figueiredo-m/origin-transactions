import { Transaction } from '@store';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type TransactionCardProps = {
  data: Transaction;
};

export const TransactionCard: React.FC<TransactionCardProps> = ({ data }) => {
  return (
    <View style={styles.root}>
      <Text>{data.Category}</Text>
      <Text>{data.Amount}</Text>
      <Text>{data.Vendor}</Text>
    </View>
  );
};
