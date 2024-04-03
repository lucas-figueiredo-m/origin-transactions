import { Colors } from '@theme';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles';

type ListFooterComponentProps = {
  isFetching?: boolean;
};

export const ListFooterComponent: React.FC<ListFooterComponentProps> = ({
  isFetching = true,
}) => {
  return (
    <View style={styles.root}>
      {isFetching ? (
        <ActivityIndicator size="large" color={Colors.Primary} />
      ) : null}
    </View>
  );
};
