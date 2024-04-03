import React, { useState } from 'react';
import {
  Modal,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { styles } from './styles';
import { FilterButton } from '../FilterButton';
import { Colors } from '@theme';

const ANIMATION_DURATION = 500;

export const FilterModal: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { height } = useWindowDimensions();
  const translationY = useSharedValue(height / 2);

  const bottomSheetStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translationY.value }],
      height: height / 2,
    };
  });

  const overlayStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      translationY.value,
      [height / 2, 0],
      [Colors.Transparent, Colors.BlackTranslucent],
    );

    return {
      backgroundColor,
    };
  });

  const onFilterButtonPress = () => {
    setVisible(true);
    translationY.value = withDelay(
      20,
      withTiming(0, { duration: ANIMATION_DURATION }),
    );
  };

  const onModalDismiss = () => {
    translationY.value = withTiming(height / 2, {
      duration: ANIMATION_DURATION,
    });
    setTimeout(() => {
      setVisible(false);
    }, ANIMATION_DURATION);
  };

  return (
    <View>
      <FilterButton isFilterActive={visible} onPress={onFilterButtonPress} />
      <Modal
        visible={visible}
        animationType="none"
        transparent
        statusBarTranslucent
      >
        <Animated.View style={[styles.overlay, overlayStyles]}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={onModalDismiss}
            style={styles.overlayButton}
          >
            <Animated.View style={[styles.bottomSheet, bottomSheetStyles]} />
          </TouchableOpacity>
        </Animated.View>
      </Modal>
    </View>
  );
};
