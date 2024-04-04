import { Colors } from '@theme';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { StyleProp, ViewStyle, useWindowDimensions } from 'react-native';
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

type UseBottomSheet = (
  isVisible: boolean,
  setVisible: Dispatch<SetStateAction<boolean>>,
) => {
  overlayStyles: StyleProp<ViewStyle>;
  bottomSheetStyles: StyleProp<ViewStyle>;
  onModalDismiss: (onDismissCallback: () => void) => void;
};

const ANIMATION_DURATION = 500;

export const useBottomSheet: UseBottomSheet = (isVisible, setVisible) => {
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

  useEffect(() => {
    if (isVisible) {
      setVisible(true);
      translationY.value = withDelay(
        20,
        withTiming(0, { duration: ANIMATION_DURATION }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const onModalDismiss = (onDismissCallback: () => void) => {
    onDismissCallback();
    translationY.value = withTiming(height / 2, {
      duration: ANIMATION_DURATION,
    });
    setTimeout(() => {
      setVisible(false);
    }, ANIMATION_DURATION);
  };

  return {
    overlayStyles,
    bottomSheetStyles,
    onModalDismiss,
  };
};
