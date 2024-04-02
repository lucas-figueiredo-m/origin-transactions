import { ChevronRight } from '@assets/icons';
import { Colors } from '@theme';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { styles } from './styles';

type TransactionButtonProps = {
  Icon: React.FC<SvgProps>;
  onPress?: () => void;
  label: string;
};

export const TransactionButton: React.FC<TransactionButtonProps> = ({
  onPress,
  label,
  Icon,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttons}>
      <Icon width={30} height={30} color={Colors.Primary} />
      <View style={styles.buttonLabelContainer}>
        <Text>{label}</Text>
      </View>
      <ChevronRight width={30} height={30} color={Colors.Grey} />
    </TouchableOpacity>
  );
};
