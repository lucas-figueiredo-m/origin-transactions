import React from 'react';
import { Translation, useTranslation } from '@hooks';
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';
import { Colors } from '@theme';

type ScreenProps = {
  loading?: boolean;
  isError?: boolean;
  errorMessage?: Translation;
  children?: React.ReactNode;
};

export const Screen: React.FC<ScreenProps> = ({
  loading = false,
  isError = false,
  errorMessage,
  children,
}) => {
  const t = useTranslation();
  return (
    <SafeAreaView style={styles.root}>
      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color={Colors.Primary} />
        </View>
      ) : isError && errorMessage ? (
        <View style={styles.center}>
          <Text>{t(errorMessage)}</Text>
        </View>
      ) : (
        children
      )}
    </SafeAreaView>
  );
};
