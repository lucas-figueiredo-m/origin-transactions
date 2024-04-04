import { Colors } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  languageItem: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: Colors.LightestGrey,
    paddingVertical: 4,
    borderRadius: 8,
  },
  checkContainer: {
    flex: 10,
  },
  languageItemText: {
    flex: 90,
    fontSize: 16,
    fontWeight: '600',
  },
});
