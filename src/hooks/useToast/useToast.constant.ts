import Toast, { ToastShowParams } from 'react-native-toast-message';

export const defaultToastShowConfig: ToastShowParams = {
  autoHide: true,
  topOffset: 60,
  visibilityTime: 5000,
  onPress: () => Toast.hide(),
};

export const persistentToastShowConfig: ToastShowParams = {
  autoHide: false,
  topOffset: 60,
  onPress: () => Toast.hide(),
};
