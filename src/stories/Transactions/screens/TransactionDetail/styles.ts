import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  map: {
    width: '100%',
    height: '100%',
  },

  content: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
    width: '100%',
    height: '85%',
    padding: 20,
  },

  vendor: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: 'grey',
  },
  category: {
    fontSize: 16,
  },
  type: {
    fontSize: 16,
  },
  textsContainer: {
    gap: 24,
  },

  sectionTitle: {
    color: 'grey',
  },
});
