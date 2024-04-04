import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Avatar } from '@components';
import { useProfile } from './hooks';
import { useTranslation } from '@hooks';
import { ChevronRight, Globe } from '@assets/icons';
import { Colors } from '@theme';

import { LanguageSelector } from './components';

export const Profile: React.FC = () => {
  const { userData } = useProfile();
  const t = useTranslation();
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.root}>
      <LanguageSelector visible={visible} setVisible={setVisible} />

      <View style={styles.avatarContainer}>
        <Avatar src={userData.profilePic} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.containerTitle}>
            {t('profile.displayName')}:{' '}
          </Text>
          <Text style={styles.containerContent}>{userData.name}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.containerTitle}>{t('profile.email')}: </Text>
          <Text style={styles.containerContent}>{userData.email}</Text>
        </View>
        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={styles.languageButton}
        >
          <View style={styles.languageTextContainer}>
            <Globe width={24} height={24} color={Colors.Grey} />
            <Text style={styles.languageText}>
              {t('profile.changeLanguage')}
            </Text>
          </View>
          <ChevronRight width={24} height={24} color={Colors.Grey} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
