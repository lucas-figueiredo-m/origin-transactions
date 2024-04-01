import { Colors, FontSize, FontWeight } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    backgroundColor: Colors.Primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: FontWeight.semibold,
    color: Colors.White,
  },
  large: {
    width: 300,
    height: 60,
    borderRadius: 10,
  },
  largeLabel: {
    fontSize: FontSize.xl,
  },

  small: {
    width: 150,
    height: 40,
    borderRadius: 5,
  },

  smallLabel: {
    fontSize: FontSize.md,
  },
});
