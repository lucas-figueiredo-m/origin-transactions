import React, { Dispatch, SetStateAction } from 'react';
import {
  Modal,
  TouchableOpacity,
  View,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { styles } from './styles';
import { useBottomSheet } from './hooks';
import { Close } from '@assets/icons';
import { Colors } from '@theme';

type BottomSheetProps = {
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  onDismiss: () => void;
  children: React.ReactNode;
  title: string;
  contentStyle?: StyleProp<ViewStyle>;
};

const hitSlop = { top: 10, right: 10, bottom: 10, left: 10 };

export const BottomSheet: React.FC<BottomSheetProps> = ({
  isVisible,
  onDismiss,
  children,
  setVisible,
  title,
  contentStyle,
}) => {
  const { bottomSheetStyles, overlayStyles, onModalDismiss } = useBottomSheet(
    isVisible,
    setVisible,
  );

  return (
    <Modal
      visible={isVisible}
      animationType="none"
      transparent
      statusBarTranslucent
    >
      <Animated.View style={[styles.overlay, overlayStyles]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => onModalDismiss(onDismiss)}
          style={styles.overlayButton}
        >
          <Animated.View style={[styles.bottomSheet, bottomSheetStyles]}>
            <View style={styles.header}>
              <View style={styles.empty} />
              <Text style={styles.headerText}>{title}</Text>
              <TouchableOpacity
                hitSlop={hitSlop}
                onPress={() => onModalDismiss(onDismiss)}
              >
                <Close width={24} height={24} color={Colors.Black} />
              </TouchableOpacity>
            </View>
            <View style={[styles.content, contentStyle]}>{children}</View>
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    </Modal>
  );
};
