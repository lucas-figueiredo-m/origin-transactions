import { Transaction, useGetTransactionsListQuery } from '@store';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { TransactionCard, TransactionCardSeparator } from './components';
import { useNavigation } from '@react-navigation/native';
import {
  MainStackRoutes,
  TabNavigationParams,
  TabRoutes,
  TransactionStackRoutes,
} from '@navigators';

type TransactionListNavigation =
  TabNavigationParams<TabRoutes.TransactionsList>;

export const TransactionsList: React.FC = () => {
  // TODO: handle last page
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetTransactionsListQuery(page);
  const { navigate } = useNavigation<TransactionListNavigation>();
  // TODO: add filtering and sorting
  // TODO: add initial loading
  // TODO: add List Empty component
  // TODO: add list footer component
  // TODO: use Animated.View to animate entering and leaving

  const onCardPress = (id: number) => {
    navigate(MainStackRoutes.TransactionStack, {
      screen: TransactionStackRoutes.TransactionDetails,
      params: { id },
    });
  };

  return (
    <View>
      <FlatList
        data={data || ([] as Transaction[])}
        keyExtractor={item => item.Id.toString()}
        renderItem={({ item }) => (
          <TransactionCard data={item} onPress={() => onCardPress(item.Id)} />
        )}
        ItemSeparatorComponent={TransactionCardSeparator}
        onEndReached={() => setPage(page + 1)}
        onRefresh={() => setPage(1)}
        refreshing={isFetching}
        onEndReachedThreshold={0.2}
      />
    </View>
  );
};
