import { Colors } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    // alignItems: 'center',
    paddingVertical: 8,
  },

  infoContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 24,
  },

  textContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerTitle: {
    fontWeight: 'bold',
  },
  containerContent: {
    color: 'gray',
  },
  avatarContainer: {
    alignItems: 'center',
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: Colors.LightGrey,
    borderRadius: 8,
  },
  bottomSheetContent: {
    gap: 8,
  },
  languageTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  languageText: {
    fontSize: 14,
    fontWeight: '600',
  },
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
