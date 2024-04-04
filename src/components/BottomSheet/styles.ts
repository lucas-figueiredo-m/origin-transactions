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
    padding: 16,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 16,
    backgroundColor: Colors.White,
  },
  empty: {
    flex: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 80,
    textAlign: 'center',
  },
  closeContainer: {
    flex: 10,
  },
  content: {
    flex: 1,
  },
});
