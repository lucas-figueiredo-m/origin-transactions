import React from 'react';
import {
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import { EditIcon } from '@assets/icons';
import { Colors } from '@theme';

type AvatarProps = {
  src: string;
  style?: StyleProp<ImageStyle>;
  onEditPress?: () => void;
};

export const Avatar: React.FC<AvatarProps> = ({ src, style, onEditPress }) => {
  return (
    <View style={styles.root}>
      {src !== '' && (
        <Image source={{ uri: src }} style={[styles.image, style]} />
      )}
      <TouchableOpacity onPress={onEditPress} style={styles.iconContainer}>
        <EditIcon width={24} height={24} strokeWidth={2} color={Colors.White} />
      </TouchableOpacity>
    </View>
  );
};
