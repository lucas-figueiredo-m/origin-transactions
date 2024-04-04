import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Avatar } from '@components';
import { useProfile } from './hooks';

export const Profile: React.FC = () => {
  const { userData } = useProfile();
  console.log('profileImage', userData);
  return (
    <View style={styles.root}>
      <View style={styles.avatarContainer}>
        <Avatar src={userData.profilePic} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.containerTitle}>Display name: </Text>
          <Text style={styles.containerContent}>{userData.name}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.containerTitle}>Email: </Text>
          <Text style={styles.containerContent}>{userData.email}</Text>
        </View>
      </View>
    </View>
  );
};
