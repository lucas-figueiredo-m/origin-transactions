import { Colors } from '@theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },

  inputContainer: {
    padding: 48,
    gap: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: '100%',
  },

  signUpContainer: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 12,
  },

  signUp: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    color: Colors.Support,
  },
  keepSignedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
});
