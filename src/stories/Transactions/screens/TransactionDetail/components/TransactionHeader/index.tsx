import { ChevronUp } from '@assets/icons';
import { Colors } from '@theme';
import React from 'react';
import { TouchableOpacity, useWindowDimensions } from 'react-native';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { styles } from './styles';

type TransactionHeaderProps = {
  onChevronPress?: () => void;
  translation: SharedValue<number>;
};

const hitSlop = { top: 10, right: 10, bottom: 10, left: 10 };

export const TransactionHeader: React.FC<TransactionHeaderProps> = ({
  onChevronPress,
  translation,
}) => {
  const { height } = useWindowDimensions();
  const animatedChevronStyle = useAnimatedStyle(() => {
    const opacity = interpolate(translation.value, [0, height * 0.6], [0, 1]);
    return { opacity };
  });
  return (
    <Animated.View style={[styles.chevronContainer, animatedChevronStyle]}>
      <TouchableOpacity hitSlop={hitSlop} onPress={onChevronPress}>
        <ChevronUp width={30} height={30} color={Colors.Grey} />
      </TouchableOpacity>
    </Animated.View>
  );
};
