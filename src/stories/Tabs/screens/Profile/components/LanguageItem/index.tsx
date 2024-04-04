import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Check } from '@assets/icons';
import { Colors } from '@theme';
import { Translation, useTranslation } from '@hooks';

type LanguageItemProps = {
  locale: 'es' | 'pt' | 'en';
  selectedLocale: 'es' | 'pt' | 'en';
  onLanguagePress: (newLocale: 'es' | 'pt' | 'en') => void;
  label: Translation;
  flag: string;
};

export const LanguageItem: React.FC<LanguageItemProps> = ({
  locale,
  selectedLocale,
  onLanguagePress,
  label,
  flag,
}) => {
  const t = useTranslation();
  return (
    <TouchableOpacity
      onPress={() => onLanguagePress(locale)}
      style={styles.languageItem}
    >
      <View style={styles.checkContainer}>
        {locale === selectedLocale && (
          <Check width={20} height={20} color={Colors.DarkGreen} />
        )}
      </View>
      <Text style={styles.languageItemText}>
        {flag} {t(label)}
      </Text>
    </TouchableOpacity>
  );
};
