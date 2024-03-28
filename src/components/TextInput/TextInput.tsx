import React, { forwardRef } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { styles } from './styles';

export const TextInput = forwardRef<RNTextInput, RNTextInput['props']>(
  (props, ref) => {
    return <TextInput ref={ref} style={styles.root} {...props} />;
  },
);
