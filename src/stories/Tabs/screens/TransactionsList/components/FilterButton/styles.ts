import { Colors } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 8,
    borderRadius: 50,
    backgroundColor: Colors.LightGrey,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  filterActive: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 8,
    borderRadius: 50,
    backgroundColor: Colors.Primary,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  text: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.Grey,
  },
  activeText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.White,
  },
});
