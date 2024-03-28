import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from '@hooks';
import { useSelector } from 'react-redux';
import { settingsSelector, useGetTransactionsListQuery } from '@store';

export const SignIn: React.FC = () => {
  const t = useTranslation();
  const { locale } = useSelector(settingsSelector);
  const { data } = useGetTransactionsListQuery(1);

  console.log(data);
  return (
    <View>
      <Text>{t('hello')}</Text>
      <Text>{locale}</Text>
    </View>
  );
};
