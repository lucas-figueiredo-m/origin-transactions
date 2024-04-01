import { Colors } from '@theme';
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  root: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: 125,
    borderWidth: 3,
    borderColor: Colors.Primary,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: width,
  },

  iconContainer: {
    position: 'absolute',
    bottom: width * 0.015,
    right: width * 0.015,
    backgroundColor: Colors.Primary,
    // padding: 4
    width: width * 0.09,
    height: width * 0.09,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width,
  },
});
