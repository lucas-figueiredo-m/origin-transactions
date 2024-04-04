import React, { Dispatch, SetStateAction, useRef } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { BottomSheet, BottomSheetRef } from '@components';
import { useAppDispatch, useTranslation } from '@hooks';
import { SettingsActions, settingsSelector } from '@store';
import { useSelector } from 'react-redux';
import { LanguageItem } from '../LanguageItem';

type LanguageSelectorProps = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  visible,
  setVisible,
}) => {
  const t = useTranslation();
  const dispatch = useAppDispatch();
  const { locale } = useSelector(settingsSelector);
  const bottomSheetRef = useRef<BottomSheetRef>(null);

  const onLocalePress = (newLocale: typeof locale) => {
    dispatch(SettingsActions.setLocale(newLocale));
    bottomSheetRef.current?.dismiss();
  };
  return (
    <BottomSheet
      ref={bottomSheetRef}
      isVisible={visible}
      setVisible={setVisible}
      title={t('profile.selectLanguage')}
    >
      <View style={styles.bottomSheetContent}>
        <LanguageItem
          locale="en"
          selectedLocale={locale}
          onLanguagePress={onLocalePress}
          label="profile.english"
          flag="🇺🇸"
        />
        <LanguageItem
          locale="pt"
          selectedLocale={locale}
          onLanguagePress={onLocalePress}
          label="profile.portuguese"
          flag="🇧🇷"
        />
        <LanguageItem
          locale="es"
          selectedLocale={locale}
          onLanguagePress={onLocalePress}
          label="profile.spanish"
          flag="🇪🇸"
        />
      </View>
    </BottomSheet>
  );
};
