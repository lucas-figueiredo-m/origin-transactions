import { ToastConfig } from 'react-native-toast-message';
import { withBaseToast } from './HOC';
import { CheckCircle, Wifi, WifiOff, XOctagon } from '@assets/icons';
import { Colors } from '@theme';

export const toastConfig: ToastConfig = {
  WifiToast: withBaseToast(WifiOff, Colors.Error),
  WifiOnToast: withBaseToast(Wifi, Colors.Primary),
  ErrorToast: withBaseToast(XOctagon, Colors.Error),
  SuccessToast: withBaseToast(CheckCircle, Colors.Success),
};
