import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { Colors } from '@theme';
import { styles } from './styles';

type ImagePickerOptionProps = {
  onPress: () => void;
  Icon: React.FC<SvgProps>;
  label: string;
};

export const ImagePickerOption: React.FC<ImagePickerOptionProps> = ({
  onPress,
  Icon,
  label,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      <Icon width={24} height={24} color={Colors.Grey} />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};
