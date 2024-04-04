import { Colors } from '@theme';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { styles } from './styles';
import { useNetInfo } from '@react-native-community/netinfo';
import { useTranslation } from '@hooks';

type ListFooterComponentProps = {
  isFetching?: boolean;
};

export const ListFooterComponent: React.FC<ListFooterComponentProps> = ({
  isFetching = true,
}) => {
  const { isConnected } = useNetInfo();
  const t = useTranslation();
  return (
    <View style={styles.root}>
      {isFetching ? (
        <ActivityIndicator size="large" color={Colors.Primary} />
      ) : !isConnected ? (
        <Text style={styles.message}>{t('common.noInternetConnection')}</Text>
      ) : null}
    </View>
  );
};
