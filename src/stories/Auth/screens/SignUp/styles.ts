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

  signInContainer: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 12,
  },

  signIn: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    color: Colors.Support,
  },

  header: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },

  buttonContainer: {
    height: 60 + 12 + 8,
    gap: 8,
  },

  error: {
    textAlign: 'center',
    fontSize: 12,
    color: Colors.Error,
  },
});
