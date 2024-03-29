import { StyleSheet } from 'react-native';

const PLACEHOLDER_FONT_SIZE = 12;
const ERROR_FONT_SIZE = 11;
const INPUT_BASE_HEIGHT = 35;

const INPUT_TOTAL_HEIGHT =
  PLACEHOLDER_FONT_SIZE + INPUT_BASE_HEIGHT + ERROR_FONT_SIZE;

export const styles = StyleSheet.create({
  root: {
    // width: 200,
    height: INPUT_TOTAL_HEIGHT,
  },

  input: {
    height: INPUT_BASE_HEIGHT,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },

  placeholder: {
    fontSize: PLACEHOLDER_FONT_SIZE,
  },

  error: {
    fontSize: ERROR_FONT_SIZE,
    fontWeight: '600',
  },
});
