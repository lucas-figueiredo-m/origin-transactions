import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from '@hooks';

export const SignIn: React.FC = () => {
  const t = useTranslation();
  return (
    <View>
      <Text>{t('hello')}</Text>
    </View>
  );
};
