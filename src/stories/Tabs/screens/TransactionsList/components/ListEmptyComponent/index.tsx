import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { useTranslation } from '@hooks';

export const ListEmptyComponent: React.FC = () => {
  const t = useTranslation();
  return (
    <View style={styles.root}>
      <Text style={styles.message}>{t('transactions.empty')}</Text>
    </View>
  );
};
