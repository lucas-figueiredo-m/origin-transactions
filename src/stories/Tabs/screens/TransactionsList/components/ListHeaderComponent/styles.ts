import { Colors } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: Colors.White,
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.Black,
  },
});
