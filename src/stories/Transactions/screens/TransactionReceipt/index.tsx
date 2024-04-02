import React from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import {
  TransactionStackRouteParams,
  TransactionStackRoutes,
} from '@navigators';
import { useRoute } from '@react-navigation/native';
import { Button } from '@components';

type TransactionReceiptRoute =
  TransactionStackRouteParams<TransactionStackRoutes.TransactionReceipt>;

export const TransactionReceipt: React.FC = () => {
  const { params } = useRoute<TransactionReceiptRoute>();

  console.log('TransactionReceipt params', params.receiptUrl);

  return (
    <View style={styles.root}>
      {params.receiptUrl && (
        <Image source={{ uri: params.receiptUrl }} style={styles.image} />
      )}
      <SafeAreaView style={styles.buttonContainer}>
        <Button.Large
          label={'Upload Receipt'}
          onPress={() => console.log('Upload Receipt')}
        />
      </SafeAreaView>
    </View>
  );
};
