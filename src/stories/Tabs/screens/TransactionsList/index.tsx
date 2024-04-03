import { Transaction, useGetTransactionsListQuery } from '@store';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { TransactionCard, TransactionCardSeparator } from './components';
import { useNavigation } from '@react-navigation/native';
import {
  MainStackRoutes,
  TabNavigationParams,
  TabRoutes,
  TransactionStackRoutes,
} from '@navigators';
import { Screen } from '@components';
import { useTranslation } from '@hooks';

type TransactionListNavigation =
  TabNavigationParams<TabRoutes.TransactionsList>;

export const TransactionsList: React.FC = () => {
  // TODO: handle last page
  const [page, setPage] = useState(1);
  const { data, isFetching, isLoading, isError } =
    useGetTransactionsListQuery(page);
  const { navigate } = useNavigation<TransactionListNavigation>();
  const t = useTranslation();
  // TODO: add filtering and sorting
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
    <Screen
      loading={isLoading}
      isError={isError}
      errorMessage={t('transactions.error')}
    >
      <FlatList
        data={data || ([] as Transaction[])}
        keyExtractor={item => item.Id.toString()}
        renderItem={({ item, index }) => (
          <TransactionCard
            data={item}
            index={index}
            onPress={() => onCardPress(item.Id)}
          />
        )}
        ItemSeparatorComponent={TransactionCardSeparator}
        onEndReached={() => setPage(page + 1)}
        onRefresh={() => setPage(1)}
        refreshing={isFetching}
        onEndReachedThreshold={0.2}
      />
    </Screen>
  );
};
