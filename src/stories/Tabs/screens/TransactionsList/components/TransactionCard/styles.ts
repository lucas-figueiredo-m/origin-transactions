import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 85, // TODO: use width-based value
    flexDirection: 'row',
  },

  leftBar: {
    width: 5, // TODO: use width-based value
    height: '100%',
    backgroundColor: 'blue',
  },

  content: {
    padding: '1%',
    flex: 95,
    flexDirection: 'row',
  },

  leftContainer: {
    flex: 70,
    justifyContent: 'space-around',
  },

  rightContainer: {
    flex: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  amount: {
    fontSize: 18,
    // fontWeight: '500',
  },

  vendor: {
    fontSize: 16,
    // fontWeight: '500',
  },
  category: {
    fontSize: 14,
    // fontWeight: '500',
  },
  type: {
    fontSize: 12,
    // fontWeight: '500',
  },
});
