import Toast from 'react-native-toast-message';
import { Translation, useTranslation } from '../useTranslation';
import {
  persistentToastShowConfig,
  defaultToastShowConfig,
} from './useToast.constant';

export const useToast = () => {
  const t = useTranslation();

  const WifiOff = () => {
    Toast.show({
      ...persistentToastShowConfig,
      type: 'WifiToast',
      text1: t('common.noInternetConnection'),
      text2: t('common.noInternetConnectionMessage'),
    });
  };

  const ShowError = (reason: Translation) => {
    Toast.show({
      ...defaultToastShowConfig,
      type: 'ErrorToast',
      text1: t('common.error'),
      text2: t(reason),
    });
  };

  const ShowSuccess = (message: Translation) => {
    Toast.show({
      ...defaultToastShowConfig,
      type: 'SuccessToast',
      text1: t('common.success'),
      text2: t(message),
    });
  };

  return {
    WifiOff,
    ShowError,
    ShowSuccess,
  };
};
