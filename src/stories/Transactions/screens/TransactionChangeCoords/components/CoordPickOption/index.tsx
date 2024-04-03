import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Colors } from '@theme';
import { styles } from './styles';
import { SvgProps } from 'react-native-svg';
import { useTranslation } from '@hooks';

type CoordPickOptionProps = {
  onPress?: () => void;
  label: string;
  Icon: React.FC<SvgProps>;
};

export const CoordPickOption: React.FC<CoordPickOptionProps> = ({
  onPress,
  label,
  Icon,
}) => {
  const t = useTranslation();
  return (
    <TouchableOpacity onPress={onPress} style={styles.option}>
      <Icon width={30} height={30} color={Colors.Primary} />
      <Text style={styles.optionText}>{t(label)}</Text>
    </TouchableOpacity>
  );
};
