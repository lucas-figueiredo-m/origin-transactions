import { Colors } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    height: 80,
    width: '90%',
    backgroundColor: Colors.White,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  leftBar: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: 7.5,
    height: '100%',
    backgroundColor: Colors.Primary,
  },
  mainContainer: {
    flex: 1,
    height: '100%',
    paddingVertical: 8,
    flexDirection: 'row',
  },
  iconContainer: {
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textsContainer: {
    flex: 1,
    justifyContent: 'center',
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    fontSize: 12,
    color: Colors.Grey,
  },
});
