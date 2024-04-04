import { FirebaseStorageService, ImagePickerResponse } from '@services';
import { useUploadReceiptMutation } from '@store';
import auth from '@react-native-firebase/auth';

export const useTransactionReceipt = (transactionId: number) => {
  const [mutate] = useUploadReceiptMutation();

  const onMethodPress = async (image: ImagePickerResponse) => {
    const user = auth().currentUser;
    if (!image || image.path === '' || !user) {
      return;
    }

    const imageUrl = await FirebaseStorageService.uploadReceiptImage(
      image.path,
      transactionId,
      user.uid,
    );

    mutate({
      ReceiptImageUrl: imageUrl,
      id: transactionId,
    });
  };

  return {
    onMethodPress,
  };
};
