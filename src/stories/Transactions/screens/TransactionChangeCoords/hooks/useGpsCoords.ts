import { useToast, useTranslation } from '@hooks';
import {
  TransactionStackNavigationParams,
  TransactionStackRoutes,
} from '@navigators';
import { useNavigation } from '@react-navigation/native';
import { PermissionResult, PermissionService, Scopes } from '@services';
import { useChangeTransactionCoordinatesMutation } from '@store';
import { Alert, Linking } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

type TransactionChangeCoordsNavigation =
  TransactionStackNavigationParams<TransactionStackRoutes.TransactionChangeCoords>;

export const useGpsCoords = (transactionId: number) => {
  const t = useTranslation();
  const { goBack } = useNavigation<TransactionChangeCoordsNavigation>();
  const [mutate, { isLoading, isError, isSuccess }] =
    useChangeTransactionCoordinatesMutation();
  const Toast = useToast();

  const handlePermissionBlocked = (message: string) => {
    return Alert.alert('Attention', t(message), [
      {
        text: 'Open Settings',
        onPress: () => Linking.openSettings(),
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };

  const handlePermissionDenied = async () => {
    const result = await PermissionService.get(Scopes.GPS);

    await handlePermissionResult(result);
  };

  const handlePermissionGranted = async () => {
    Geolocation.getCurrentPosition(async ({ coords }) => {
      try {
        const { latitude: Lat, longitude: Lon } = coords;

        await mutate({ Lat, Lon, id: transactionId });
        Toast.ShowSuccess('transactionMapPicker.success');
        goBack();
      } catch (error) {
        Toast.ShowError('transactionMapPicker.errorMessage');
      }
    });
  };

  const handlePermissionResult = async (result: PermissionResult) => {
    const { grant, askOpenSettings, message } = result;

    if (!grant && askOpenSettings) {
      handlePermissionBlocked(message);
      return;
    }

    if (!grant && !askOpenSettings) {
      handlePermissionDenied();
      return;
    }

    await handlePermissionGranted();
  };

  const onGpsPress = async () => {
    const result = await PermissionService.check(Scopes.GPS);

    return handlePermissionResult(result);
  };

  return { onGpsPress, isError, isLoading, isSuccess };
};
