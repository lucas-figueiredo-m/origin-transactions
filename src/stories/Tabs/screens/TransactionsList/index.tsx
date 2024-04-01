import { Transaction, useGetTransactionsListQuery } from '@store';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { TransactionCard } from './components';

export const TransactionsList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetTransactionsListQuery(page);

  console.log(data);
  return (
    <View>
      <FlatList
        data={data || ([] as Transaction[])}
        keyExtractor={item => item.Id.toString()}
        renderItem={({ item }) => <TransactionCard data={item} />}
        onEndReached={() => setPage(page + 1)}
        onRefresh={() => setPage(1)}
        refreshing={isFetching}
      />
    </View>
  );
};
