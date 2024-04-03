import { Colors } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
  overlayButton: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    width: '100%',
    backgroundColor: Colors.White,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});
