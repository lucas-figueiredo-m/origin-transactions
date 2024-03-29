import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { styles } from './styles';
import { Translation, useTranslation } from '@hooks';

type ButtonProps = {
  label: Translation;
  onPress?: () => void;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
};

const BaseButton: React.FC<ButtonProps> = ({
  label,
  onPress,
  loading,
  style,
  labelStyle,
}) => {
  const t = useTranslation();
  return (
    <TouchableOpacity style={[styles.root, style]} onPress={onPress}>
      {loading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style={[styles.label, labelStyle]}>{t(label)}</Text>
      )}
    </TouchableOpacity>
  );
};

const Large: React.FC<Omit<ButtonProps, 'style'>> = props => {
  return (
    <BaseButton
      {...props}
      style={styles.large}
      labelStyle={styles.largeLabel}
    />
  );
};

const Small: React.FC<Omit<ButtonProps, 'style'>> = props => {
  return (
    <BaseButton
      {...props}
      style={styles.small}
      labelStyle={styles.smallLabel}
    />
  );
};

export const Button = {
  Large,
  Small,
};
