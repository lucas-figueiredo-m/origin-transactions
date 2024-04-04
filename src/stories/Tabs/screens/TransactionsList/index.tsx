import { Transaction, useGetTransactionsListQuery } from '@store';
import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import {
  ListEmptyComponent,
  ListFooterComponent,
  TransactionCard,
  TransactionCardSeparator,
} from './components';
import { useNavigation } from '@react-navigation/native';
import {
  MainStackRoutes,
  TabNavigationParams,
  TabRoutes,
  TransactionStackRoutes,
} from '@navigators';
import { Screen } from '@components';
import { useTranslation } from '@hooks';
import { ListHeaderComponent } from './components/ListHeaderComponent';
import { useNetInfo } from '@react-native-community/netinfo';

type TransactionListNavigation =
  TabNavigationParams<TabRoutes.TransactionsList>;

export const TransactionsList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching, isLoading, isError, refetch } =
    useGetTransactionsListQuery(page);
  const { navigate } = useNavigation<TransactionListNavigation>();
  const t = useTranslation();
  const { isConnected } = useNetInfo();

  useEffect(() => {
    if (isConnected && isError) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onCardPress = (id: number) => {
    navigate(MainStackRoutes.TransactionStack, {
      screen: TransactionStackRoutes.TransactionDetails,
      params: { id },
    });
  };

  const renderItem: ListRenderItem<Transaction> = ({ item, index }) => (
    <TransactionCard
      data={item}
      index={index}
      onPress={() => onCardPress(item.Id)}
    />
  );

  const ListFooter = useMemo(() => {
    return <ListFooterComponent isFetching={isFetching} />;
  }, [isFetching]);

  const onEndReached = () => {
    if (isConnected) {
      setPage(page + 1);
    }
  };

  const onRefresh = () => {
    if (isConnected) {
      setPage(1);
    }
  };

  return (
    <Screen
      loading={isLoading}
      isError={isError && !!isConnected}
      errorMessage={t('transactions.error')}
    >
      <FlatList
        data={data || ([] as Transaction[])}
        keyExtractor={item => item.Id.toString()}
        renderItem={renderItem}
        stickyHeaderIndices={[0]}
        ListEmptyComponent={ListEmptyComponent}
        ListFooterComponent={ListFooter}
        ListHeaderComponent={ListHeaderComponent}
        ItemSeparatorComponent={TransactionCardSeparator}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        onRefresh={onRefresh}
        refreshing={isFetching}
        onEndReachedThreshold={0.2}
      />
    </Screen>
  );
};
