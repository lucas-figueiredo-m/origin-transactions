import { FirebaseStorageService, ImagePickerResponse } from '@services';
import { useUploadReceiptMutation } from '@store';
import auth from '@react-native-firebase/auth';
import { useToast } from '@hooks';

export const useTransactionReceipt = (transactionId: number) => {
  const [mutate] = useUploadReceiptMutation();
  const Toast = useToast();

  const onMethodPress = async (image: ImagePickerResponse) => {
    try {
      const user = auth().currentUser;
      if (!image || image.path === '' || !user) {
        return;
      }

      const imageUrl = await FirebaseStorageService.uploadReceiptImage(
        image.path,
        transactionId,
        user.uid,
      );

      await mutate({
        ReceiptImageUrl: imageUrl,
        id: transactionId,
      });
      Toast.ShowSuccess('transactionReceipt.receiptUploaded');
    } catch (error) {
      Toast.ShowError('common.error');
    }
  };

  return {
    onMethodPress,
  };
};
