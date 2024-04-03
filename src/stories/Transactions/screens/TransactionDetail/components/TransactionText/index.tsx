import React from 'react';
import { StyleProp, Text, TextStyle, View } from 'react-native';
import { Translation, useTranslation } from '@hooks';

type TransactionTextProps = {
  title: Translation;
  content: string;
  titleStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<TextStyle>;
};

export const TransactionText: React.FC<TransactionTextProps> = ({
  title,
  content,
  titleStyle,
  contentStyle,
}) => {
  const t = useTranslation();

  return (
    <View>
      <Text style={titleStyle}>{t(title)}</Text>
      <Text style={contentStyle}>{content}</Text>
    </View>
  );
};
