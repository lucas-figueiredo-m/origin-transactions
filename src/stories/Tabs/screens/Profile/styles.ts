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
});
