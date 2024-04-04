import React, { useState } from 'react';
import { Image, SafeAreaView } from 'react-native';
import { styles } from './styles';
import {
  TransactionStackRouteParams,
  TransactionStackRoutes,
} from '@navigators';
import { useRoute } from '@react-navigation/native';
import { Button, ImagePicker } from '@components';
import { useTransactionReceipt } from './hooks';

type TransactionReceiptRoute =
  TransactionStackRouteParams<TransactionStackRoutes.TransactionReceipt>;

export const TransactionReceipt: React.FC = () => {
  const { params } = useRoute<TransactionReceiptRoute>();
  const { onMethodPress } = useTransactionReceipt(params.id);
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView style={styles.root}>
      <ImagePicker
        visible={visible}
        setVisible={setVisible}
        onCameraPress={onMethodPress}
        onGalleryPress={onMethodPress}
      />
      {params.receiptUrl && (
        <Image source={{ uri: params.receiptUrl }} style={styles.image} />
      )}
      <SafeAreaView style={styles.buttonContainer}>
        <Button.Large
          label={'Upload Receipt'}
          onPress={() => setVisible(true)}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};
