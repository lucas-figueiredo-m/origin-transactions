import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useTranslation } from '@hooks';
import { useSelector } from 'react-redux';
import { settingsSelector, useGetTransactionsListQuery } from '@store';
import Config from 'react-native-config';

export const SignIn: React.FC = () => {
  const t = useTranslation();
  const { locale } = useSelector(settingsSelector);
  const { data } = useGetTransactionsListQuery(1);

  console.log(data);
  return (
    <SafeAreaView>
      <Text>{t('hello')}</Text>
      <Text>{locale}</Text>
      <Text>{Config.TEST}</Text>
    </SafeAreaView>
  );
};
