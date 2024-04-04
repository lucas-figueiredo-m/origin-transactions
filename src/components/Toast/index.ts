import { ToastConfig } from 'react-native-toast-message';
import { withBaseToast } from './HOC';
import { CheckCircle, WifiOff, XOctagon } from '@assets/icons';
import { Colors } from '@theme';

export const toastConfig: ToastConfig = {
  WifiToast: withBaseToast(WifiOff, Colors.Error),
  ErrorToast: withBaseToast(XOctagon, Colors.Error),
  SuccessToast: withBaseToast(CheckCircle, Colors.Success),
};
