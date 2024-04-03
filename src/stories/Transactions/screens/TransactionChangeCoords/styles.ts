import { Colors } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingHorizontal: 16,
  },

  separator: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.LightGrey,
  },

  option: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },

  optionText: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.Grey,
  },
});
