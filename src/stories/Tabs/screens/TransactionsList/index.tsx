import { Transaction, useGetTransactionsListQuery } from '@store';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { TransactionCard, TransactionCardSeparator } from './components';

export const TransactionsList: React.FC = () => {
  // TODO: handle last page
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetTransactionsListQuery(page);

  return (
    <View>
      <FlatList
        data={data || ([] as Transaction[])}
        keyExtractor={item => item.Id.toString()}
        renderItem={({ item }) => <TransactionCard data={item} />}
        ItemSeparatorComponent={TransactionCardSeparator}
        onEndReached={() => setPage(page + 1)}
        onRefresh={() => setPage(1)}
        refreshing={isFetching}
        onEndReachedThreshold={0.2}
      />
    </View>
  );
};
