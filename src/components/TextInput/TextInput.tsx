import React, { forwardRef } from 'react';
import {
  TextInput as RNTextInput,
  Text,
  TextInputProps,
  View,
} from 'react-native';
import { styles } from './styles';
import { Translation, useTranslation } from '@hooks';

type TextInputType = Omit<TextInputProps, 'placeholder'> & {
  placeholder: Translation;
  error?: string;
};

export const TextInput = forwardRef<RNTextInput, TextInputType>(
  (props, ref) => {
    const { placeholder, style } = props;
    const t = useTranslation();

    return (
      <View style={[styles.root, style]}>
        <Text style={styles.placeholder}>{t(placeholder)}</Text>
        <RNTextInput {...props} ref={ref} style={styles.input} placeholder="" />
        {props.error && <Text style={styles.error}>{t(props.error)}</Text>}
      </View>
    );
  },
);
