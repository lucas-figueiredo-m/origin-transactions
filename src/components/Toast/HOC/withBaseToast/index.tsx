import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { ToastConfigParams } from 'react-native-toast-message';
import { styles } from './styles';
import { Colors } from '@theme';
import { SvgProps } from 'react-native-svg';

type ToastComponent<T = unknown> = (
  props: ToastConfigParams<T>,
) => React.ReactNode;

export const withBaseToast = <T extends unknown>(
  Icon: React.FC<SvgProps>,
  highlightColor: Colors,
): ToastComponent<T> => {
  return ({ onPress, text1, text2 }: ToastConfigParams<T>) => (
    <Pressable style={styles.root} onPress={onPress}>
      <View style={[styles.leftBar, { backgroundColor: highlightColor }]} />
      <View style={styles.mainContainer}>
        <View style={styles.iconContainer}>
          <Icon width={30} height={30} color={Colors.Grey} />
        </View>
        <View style={styles.textsContainer}>
          {text1 && <Text style={styles.title}>{text1}</Text>}
          {text2 && <Text style={styles.description}>{text2}</Text>}
        </View>
      </View>
    </Pressable>
  );
};
